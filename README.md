# wdkhuans.github.io

# GlobalFusion: A Global Attentional Deep Learning Framework for Multisensor Information Fusion

## 1 Abstract

对于多模态传感器信息融合，这篇文章通过引入一种称为 **global attention module** 的 **lightweight attention mechanism**，来增强基于深度神经网络的传感器数据推理应用。该机制能够利用从较高层次的神经网络收集到的信息，选择性地放大有用信息特征的影响，并在融合层抑制不相关的噪声。我们成功地将此机制集成到了一个新的端到端学习框架 **GlobalFusion** 中，在该框架中部署了两个global attention modules，分别用于spatial fusion 和sensing modality fusion。通过对四个公开的人类活动识别（HAR）数据集的广泛评估，我们成功证明了GlobalFusion在提高信息融合质量方面的有效性。新方法在所有四个数据集上明显优于最先进的算法。我们还表明，所学的注意力权重与人类的直觉非常吻合。然后，我们通过在商用IoT设备上测试其推理时间和能耗来验证GlobalFusion的效率。只有微不足道的开销是由global attention modules引起的。

## 2 GLOBALFUSION FRAMEWORK

idea的来源是“在深度神经网络中，较低层的特征对于输入是局部性的，对于任务是一般性的；而较高层的特征对于输入是全局性的，且是针对特定的类别的。”我们将低层的特征向量称为local features，高层的特征向量称为global features。因此，将局部特征和全局信息并置可以帮助改进基于组合的分类。

### 2.1 GlobalFusion Architecture

GlobalFusion is **based on** the state-of-the-art **DeepSense** framework as back-bone network. 

**Problem of DeepSense:** In the vanilla DeepSense model, fusion of musitisensor inputs is performed by a **three-layer convolution module** after concatenating inputs from all fusing components. By doing so, the model does not take the heterogeneity among input sources into consideration and **pays equal attention to each fusing component**. Thus, **the fusion layer cannot maximize the information extracted from all information sources** (i.e., sensing modalities and body positions). 

![image-20200913210805773](C:\Users\82045\AppData\Roaming\Typora\typora-user-images\image-20200913210805773.png)

**Solutions:** we cut the direct connection between output of information fusion convolution module and the input of the next layer, and add one **global attention module** between them to first **enhance fusion output with complementary local features** before feeding it into next layer.  The overall architecture of GlobalFusion is presented in Figure1. 

Suppose the **sensing data X** comes from **L spatial locations**, where **N sensors** are deployed simultaneously at each position. Each sensor also has **d dimensions** (i.e., x, y, z axises).  Each data segment is further divided into **T non-overlapped time intervals**. In data preprocessing step, we perform a **Fourier transform** to each interval to extract their frequency domain representations, which have been proved to be more informative than pure time domain representations.  To help illustrate our data segmentation and pre-processing procedure, we show an example of data input to our model in Figure 2. 

![image-20200913224227563](C:\Users\82045\AppData\Roaming\Typora\typora-user-images\image-20200913224227563.png)

After preprocessing, the input fed into the model should have a shape of $X∈R^{T×N×L×d×2f}$, where T represents time intervals, N denotes sensors, L denotes spatial locations, d is the sensor dimension, and 2f is spectral samples with f frequency magnitude and phase pairs within each interval. 

In general, GlobalFusion is divided into four stacked sub-modules: **individual sensor convolution module**, **spatial fusion module**, **modality fusion module**, and **time recurrent module**. We will introduce these sub-modules one by one from bottom to top.

#### Individual Convolution Module.

The processed sensing data from each (sensor, position, interval) combination is first separately fed into the individual convolution module.  The input data is $X^{sl}_{[t··]}$, where s denotes sensor, l denotes position, t denotes time interval. No sensor or body position interaction is considered in this module. In GlobalFusion, convolution layers are used to gradually extract frequency pattern  features within the spectrum of each time interval. We call the output of this module as *(sensor, position, interval)* features, which contain the information contained in given sensor at a specific body position and time interval. They are also the input of spatial fusion module.

#### Spatial Fusion Module.

In this module, we fuse the obtained local (sensor, position, interval) features for same sensing modality across different spatial positions, into *(sensor, interval)* features.  (sensor, interval) features represent the information contained in given sensor across all body positions at specific interval.  We stack a **global position attention module** to allow the incomplete **global information** to absorb more complementary information from **input features** at each spatial position. These two sub-modules together constitute our spatial fusion module.  The input to this module is $X^{sl(4)}_{[t··]}$ from sensors across every spatial position l, where upper subscript (4) means input to the 4-th layer. 

#### Modality Fusion Module.

In this module, we fuse (sensor, interval) features $X^{s(7)_{[t..]}}$ collected from all sensing modalities s into an interval feature vector, which is a general feature representation of time interval t. Specifically,we still use a three-layer convolution module to extract preliminary global information from all sensing modalities,the output of which contains incomplete interval features.  We use another global attention module to help incomplete interval features absorb more complementary information from input (sensor, interval) features.

#### Time Recurrent Module.

. Here we use a stacked two-layer Gated Recurrent Unit (GRU) to sequentially encode the temporal pattern information.   The input to this module is the interval features $X^{(10)}_{[t··]}$ across all time intervals t.  The order information across time intervals is extracted by the recurrent neural network. 

### 2.2 Global Attention Module

We explain the specific design details of our global attention module in this subsection. To narrow down the gap between our **learning objective** and **limitation of backbone feature extraction modules**, the global attention mechanism is accordingly designed. In global attention module, the complementary information is extracted from **input local features** and added to **global output features** before feeding them into next layer. 

![image-20200913233652464](C:\Users\82045\AppData\Roaming\Typora\typora-user-images\image-20200913233652464.png)











