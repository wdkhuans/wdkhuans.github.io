(() => {
  'use strict';
  const copy = {
    en: {
      skip: 'Skip to content', navResearch: 'Research', navPapers: 'Publications', navAbout: 'About', navOutside: 'Outside',
      affiliation: 'Ant Group <span>×</span> Zhejiang University', heroLocation: 'RESEARCHER · HANGZHOU, CHINA', heroRole: 'Postdoctoral researcher',
      heroDescription: 'I study how the devices around us can understand the person behind the signals — and make everyday life a little better.',
      emailLink: 'Email ↗', heroCaption: 'A different kind of observation.', heroScroll: 'A little about what I do',
      heroPhotoAlt: 'Shenghuan holding a camera outdoors, with snow-capped mountains and a temple in the background',
      researchLabel: 'RESEARCH DIRECTION', researchTitle: 'Personal intelligence,<br><em>across devices.</em>',
      researchIntro: 'Our lives move between devices. I want personal intelligence to follow the person — connecting physical signals into a continuous understanding of everyday life.',
      researchDetail: 'My research connects wearable sensing, multimodal foundation models, and personal memory. I am exploring how shared representations of behavior, identity, health, and affect can support helpful, trustworthy interaction.',
      researchLink: 'The work behind this direction', diagramLabel: 'A RESEARCH SKETCH', diagramPerson: 'THE PERSON',
      diagramAria: 'Signals from wearable devices, glasses, earbuds and phones connect to a continuous understanding of the person',
      deviceWatch: 'WEARABLES', deviceGlasses: 'GLASSES', deviceAudio: 'EARBUDS', devicePhone: 'PHONE',
      filterAll: 'Together', filterWatch: 'Wearables', filterGlasses: 'Glasses', filterAudio: 'Earbuds', filterPhone: 'Phone',
      themeOne: 'Sensing in the real world', themeOneText: 'Learning from diverse, incomplete signals in everyday settings.',
      themeTwo: 'Models that carry across', themeTwoText: 'Shared representations across sensors, devices, and people.',
      themeThree: 'Intelligence with continuity', themeThreeText: 'Connecting context, identity, and memory to support the individual.',
      pubLabel: 'SELECTED WORK', pubTitle: 'Deepening our models of people.', allPublications: 'Full publication list',
      pubIntro: 'A continuing thread: dynamic sensing, self-supervision, language alignment, and wearable foundation models.',
      collaborativePapers: 'Selected collaborative work', paper: 'Paper ↗', citation: 'BibTeX',
      aboutLabel: 'A LITTLE CONTEXT', aboutTitle: 'A path through<br><em>signals & people.</em>',
      aboutIntro: 'I received my Ph.D. in Computer Science and Technology from Zhejiang University in June 2026, conducting my research in the Pervasive Computing Lab.',
      aboutCurrent: 'Since September 2026, I have been a joint postdoctoral researcher at Ant Group and Zhejiang University.',
      aboutPractice: 'Alongside academic research, I have worked on multimodal authentication for smart glasses and explored memory and reasoning for long egocentric videos.',
      present: 'NOW', postdoc: 'Joint postdoctoral researcher', postdocOrg: 'Ant Group × Zhejiang University',
      postdocUniversityMentor: 'University mentor: Prof. Jinsong Han', postdocIndustryMentor: 'Industry mentor: Weiqiang Wang',
      phd: 'Ph.D. · Computer Science', zju: 'Zhejiang University', thesis: 'Thesis: Research on Foundation Models for Wearable Data',
      phdAdvisor: 'Ph.D. advisor: Prof. Ling Chen',
      serviceLabel: 'IN THE COMMUNITY', serviceText: 'Reviewer for IMWUT, AAAI, TIP, TNNLS, and other venues. I enjoy sharing ideas, mentoring, and conversations that open up a new direction.',
      outsideLabel: 'BEYOND THE LAB', outsideTitle: 'Life, <em>in the frame.</em>',
      outsideIntro: 'Usually with a camera, on a bike, or watching a match. Often with post-rock in my headphones. Always curious about what is around the next corner.',
      streetAlt: 'A street leading toward the mountains', mountainsAlt: 'Snow-covered mountains above a green plain', footballAlt: 'Football players on a green pitch, seen from the stands',
      streetCaption: 'Taking the long way home.', mountainsCaption: 'A little further out.', footballCaption: 'For the love of the game.',
      personalNote: 'Street photography. Football nights. Roads yet to ride.',
      contactLabel: 'GOOD RESEARCH STARTS WITH A CONVERSATION.', contactTitle: "Let's compare notes.",
      footerNote: 'Made of curiosity, in Hangzhou.', backToTop: 'Back to top ↑', copyCitation: 'Copy citation', copied: 'Copied.', copyFailed: 'Please select the text above to copy.', closeCitation: 'Close citation',
      deviceNotes: {
        all: 'Many perspectives. One person. Understanding that continues across devices and over time.',
        watch: 'Movement and physiology offer a continuous view of activity and the body.',
        glasses: 'A first-person view brings everyday actions into their surrounding context.',
        audio: 'Sound and motion add another perspective on activity and interaction.',
        phone: 'Everyday mobility connects changes in activity, place, and context.'
      },
      concepts: {wonderwall: 'Virtual → real', goat: 'Signals ↔ language', stmae: 'Learning from what is missing', dynamicwhar: 'Relationships in motion'}
    },
    zh: {
      skip: '跳转到正文', navResearch: '研究', navPapers: '论文', navAbout: '关于', navOutside: '生活',
      affiliation: '蚂蚁集团 <span>×</span> 浙江大学', heroLocation: '研究者 · 中国杭州', heroRole: '博士后研究员',
      heroDescription: '我研究如何让身边的设备，从传感信号中理解真实世界中的人，让智能更贴近每个人的生活。',
      emailLink: '邮件 ↗', heroCaption: '换一种方式，观察世界。', heroScroll: '往下看看，我在研究什么',
      heroPhotoAlt: '缪盛欢手持相机，身后是雪山与寺院建筑',
      researchLabel: '研究方向', researchTitle: '连接多终端，<br><em>理解每一个人。</em>',
      researchIntro: '生活在不同设备之间流动。我希望个人智能也能持续理解同一个人，将分散的物理信号，连接为对日常生活的长期认知。',
      researchDetail: '我的研究围绕可穿戴感知、多模态基础模型与个人记忆展开，探索如何形成行为、身份、健康与情绪的共享表征，支持有用、可信的个性化交互。',
      researchLink: '这条研究路线背后的工作', diagramLabel: '研究构想', diagramPerson: '以人为中心',
      diagramAria: '可穿戴设备、眼镜、耳机和手机的信号共同形成对使用者的持续理解',
      deviceWatch: '可穿戴', deviceGlasses: '眼镜', deviceAudio: '耳机', devicePhone: '手机',
      filterAll: '共同感知', filterWatch: '可穿戴', filterGlasses: '眼镜', filterAudio: '耳机', filterPhone: '手机',
      themeOne: '真实世界的感知', themeOneText: '从日常生活中多样、不完整的信号里学习。',
      themeTwo: '跨设备的通用表征', themeTwoText: '让模型适应不同传感器、终端和使用者。',
      themeThree: '持续理解个人的智能', themeThreeText: '连接情境、身份与记忆，为个体提供支持。',
      pubLabel: '代表性工作', pubTitle: '持续深化对人的建模。', allPublications: '完整论文列表',
      pubIntro: '一条持续推进的研究路线：动态感知、自监督学习、语言对齐与可穿戴基础模型。',
      collaborativePapers: '部分合作研究', paper: '论文 ↗', citation: 'BibTeX',
      aboutLabel: '关于我', aboutTitle: '在信号与人之间，<br><em>持续探索。</em>',
      aboutIntro: '我于 2026 年 6 月获得浙江大学计算机科学与技术博士学位，在普适计算实验室开展博士研究。',
      aboutCurrent: '2026 年 9 月起，我在蚂蚁集团与浙江大学开展联合培养博士后研究。',
      aboutPractice: '在学术研究之外，我也参与过智能眼镜场景的多模态认证研发，并探索面向超长第一视角视频的记忆与推理。',
      present: '至今', postdoc: '联合培养博士后', postdocOrg: '蚂蚁集团 × 浙江大学',
      postdocUniversityMentor: '高校导师：韩劲松教授', postdocIndustryMentor: '企业导师：王维强',
      phd: '博士 · 计算机科学与技术', zju: '浙江大学', thesis: '博士论文：可穿戴数据基础模型研究',
      phdAdvisor: '博士导师：陈岭教授',
      serviceLabel: '学术共同体', serviceText: '担任 IMWUT、AAAI、TIP、TNNLS 等期刊与会议的审稿人。我也喜欢交流想法、参与指导，在讨论中找到新的研究问题。',
      outsideLabel: '研究之外', outsideTitle: '生活，<em>也值得取景。</em>',
      outsideIntro: '带着相机散步，骑车，或者看一场球。耳机里常放着后摇，也总想知道，下一个转角有什么。',
      streetAlt: '一条通向远处群山的城市街道', mountainsAlt: '绿色原野上方的连绵雪山', footballAlt: '从看台望向绿茵场上的足球队员',
      streetCaption: '绕一点路，看看街头。', mountainsCaption: '再去远一点的地方。', footballCaption: '为热爱，留一个夜晚。',
      personalNote: '扫街摄影、足球，还有没骑过的路。',
      contactLabel: '好的研究，也常从一次聊天开始。', contactTitle: '一起聊聊新的想法。',
      footerNote: '在杭州，保持好奇。', backToTop: '回到顶部 ↑', copyCitation: '复制引用', copied: '已复制。', copyFailed: '请选中上方文本进行复制。', closeCitation: '关闭引用',
      deviceNotes: {
        all: '多个视角，同一个人。让理解跨越终端，在时间中延续。',
        watch: '运动与生理信号，为活动和身体状态提供持续的观察视角。',
        glasses: '第一视角的观察，让日常行为与周围情境联系起来。',
        audio: '声音与运动，为理解活动和交互补充另一种视角。',
        phone: '日常移动的轨迹，连接活动、位置与情境的变化。'
      },
      concepts: {wonderwall: '虚拟 → 真实', goat: '信号 ↔ 语言', stmae: '从缺失中学习', dynamicwhar: '动态的传感关系'}
    }
  };
  let language = 'en';
  try { const saved = localStorage.getItem('sm-language'); if (saved === 'zh' || saved === 'en') language = saved; } catch (_) {}
  let device = 'all';
  let activePaper = null;
  const dialog = document.querySelector('#citation-dialog');
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const t = key => copy[language][key];

  function renderPublications() {
    const publications = window.PUBLICATIONS || [];
    for (const selected of [true, false]) {
      const target = document.querySelector(selected ? '#selected-publications' : '#collaborative-publications');
      target.innerHTML = publications.filter(p => p.selected === selected).map(p => {
        const authors = p.authors.map(a => a === 'Shenghuan Miao' ? `<strong>${escape(a)}</strong>` : escape(a)).join(', ');
        const concept = t('concepts')[p.id];
        return `<article class="publication"><div class="pub-side"><p class="pub-year">${p.year}</p><p class="pub-venue">${escape(p.venueShort)}</p></div><div class="pub-main"><h3 class="pub-title"><a href="${escape(p.doiUrl)}" target="_blank" rel="noopener noreferrer">${escape(p.title)}</a></h3><p class="pub-authors">${authors}</p><p class="pub-desc">${escape(p.contribution[language])}</p><div class="pub-actions"><a href="${escape(p.doiUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(t('paper') + ': ' + p.title)}">${t('paper')}</a><button type="button" data-citation="${escape(p.id)}" aria-label="BibTeX: ${escape(p.title)}">BibTeX</button>${concept ? `<span class="pub-concept">${escape(concept)}</span>` : ''}</div></div></article>`;
      }).join('');
    }
    document.querySelectorAll('[data-citation]').forEach(button => button.addEventListener('click', () => {
      activePaper = publications.find(p => p.id === button.dataset.citation);
      document.querySelector('#citation-content').textContent = activePaper.bibtex;
      document.querySelector('#copy-status').textContent = '';
      dialog.showModal();
    }));
  }

  function setDevice(nextDevice) {
    device = nextDevice;
    document.querySelector('.research-diagram').dataset.device = device;
    document.querySelectorAll('[data-device-select]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.deviceSelect === device)));
    document.querySelector('#device-note').textContent = t('deviceNotes')[device];
  }

  function applyLanguage() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '缪盛欢 · 多终端的个人智能' : 'Shenghuan Miao · Personal intelligence, across devices';
    document.querySelectorAll('[data-i18n]').forEach(node => { if (t(node.dataset.i18n)) node.innerHTML = t(node.dataset.i18n); });
    document.querySelectorAll('[data-alt]').forEach(node => { node.alt = t(node.dataset.alt); });
    document.querySelectorAll('[data-aria]').forEach(node => node.setAttribute('aria-label', t(node.dataset.aria)));
    const switcher = document.querySelector('#language-switch');
    switcher.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
    switcher.querySelector('.language-current').textContent = language === 'en' ? 'EN' : '中';
    switcher.querySelector('.language-other').textContent = language === 'en' ? '中' : 'EN';
    document.querySelector('#close-citation').setAttribute('aria-label', t('closeCitation'));
    document.querySelector('.device-controls').setAttribute('aria-label', language === 'zh' ? '探索不同设备的感知视角' : 'Explore device perspectives');
    document.querySelector('.site-header nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
    renderPublications();
    setDevice(device);
  }

  document.querySelector('#language-switch').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('sm-language', language); } catch (_) {}
    applyLanguage();
  });
  document.querySelectorAll('[data-device-select]').forEach(button => button.addEventListener('click', () => setDevice(button.dataset.deviceSelect)));
  document.querySelector('#close-citation').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  document.querySelector('#copy-citation').addEventListener('click', async () => {
    if (!activePaper) return;
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(activePaper.bibtex);
      else {
        const area = document.createElement('textarea');
        area.value = activePaper.bibtex; area.style.position = 'fixed'; area.style.opacity = '0'; dialog.append(area); area.select();
        const success = document.execCommand('copy'); area.remove(); if (!success) throw new Error('Copy unavailable');
      }
      document.querySelector('#copy-status').textContent = t('copied');
    } catch (_) { document.querySelector('#copy-status').textContent = t('copyFailed'); }
  });
  document.querySelector('#copyright-year').textContent = String(new Date().getFullYear());
  applyLanguage();
})();
