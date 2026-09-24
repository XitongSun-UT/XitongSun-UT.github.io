---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hey! Glad you’re here!

I’m Xitong Sun, a first-year <strong>M.S.</strong> student in
<strong>Mechanical Engineering</strong> at 
<strong>University of Texas at Austin</strong>.

I received my B.E. degree in Microelectronics Science and Engineering in July 2025 at 
<strong>Southern University of Science and Technology</strong> (<strong>SUSTech</strong>), 
a young university established in 2010 in Shenzhen, China 
(<a href="https://www.nature.com/articles/nature.2012.10631" target="_blank">a short story about SUSTech</a>). 
During my undergraduate studies, I conducted research on MEMS-based gas sensors under the supervision of 
<a href="https://scholar.google.com/citations?hl=en&user=xd7lNYEAAAAJ" target="_blank">Prof. Fei Wang</a>.

In August 2025, I was proud to join the University of Texas at Austin as a member of the 
longhorns and begin my M.S. studies in Mechanical Engineering.
Since then, I have explored a range of research areas, and my current interests focus on
<strong>power electronics based on piezoelectric passive components</strong>
(advised by <a href="https://scholar.google.com/citations?hl=en&amp;user=yJo453cAAAAJ" target="_blank" rel="noopener noreferrer">Dr. Ruochen Lu</a>),
as well as <strong>advanced modeling and control techniques for high-performance power electronics</strong>
(advised by <a href="https://scholar.google.com/citations?user=XdHExrYAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noopener noreferrer">Dr. Yicheng Zhu</a>).

I have experience in <strong>IC-level</strong> design and simulation (e.g., Cadence Virtuoso), 
<strong>system-level</strong> design and prototyping (e.g., KiCad, PLECS, Code Composer Studio (CCS)), 
as well as <strong>cleanroom-based</strong> device fabrication.

Looking ahead, I plan to re-apply to <strong>PhD</strong> programs in 
<strong>Fall 2027</strong>, with a focus on <strong>Power Electronics</strong>!

Please feel free to contact me at **xitongsun@utexas.edu**




<span class='anchor' id='education'></span>
# 📖 Education
- *2025.08 - now*, M.S. Student in Mechanical Engineering, The University of Texas at Austin (UT).
- *2021.08 - 2025.07*, B.E. in Microelectronics Science and Engineering, Southern University of Science and Technology (SUSTech).
- *2023.06 – 2023.08* Summer Session, University of California, Berkeley.


<span class='anchor' id='research-and-publications'></span>
# 📝 Research and Publications 

<div class='paper-box'>
<div class="paper-box-text" markdown="1" style="max-width: 100%; padding-left: 0;">

**Conductive-Silicon-Packaged LiNbO<sub>3</sub> Resonators**

Advised by Prof. [Ruochen Lu](https://scholar.google.com/citations?hl=en&user=yJo453cAAAAJ), UT<br>
*Apr. 2026 – Present*

- Designed a Si–LN–Si packaged resonator with conductive Si electrodes to improve power handling, avoid electrode breakdown and enhance heat dissipation.
- Demonstrated capacitive excitation of LN through Si–LN air gaps using conductive Si electrodes, with negligible degradation in Q and k<sup>2</sup> compared with bare LN resonators.
- Fabricated Si–LN–Si resonator prototypes using Au–Au, BCB, photoresist, and crystal bond, and evaluated their effects on resonator performance.
- Evaluated packaging effects on power handling and thermal performance under high-power excitation.

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<img src="images/LN.png" alt="Admittance spectra of an LN-based piezoelectric isolation transformer" width="100%">
</div>
</div>
<div class="paper-box-text" markdown="1">

**Vertically Stacked LiNbO<sub>3</sub> Isolation Transformers**

Advised by Prof. [Ruochen Lu](https://scholar.google.com/citations?hl=en&user=yJo453cAAAAJ), UT<br>
*Mar. 2026 – Present*

- Designed a vertically stacked LN–sapphire–LN isolation transformer for mechanically coupled power transfer across an electrically insulating layer, targeting high power handling and high breakdown voltage.
- Simulated mode shapes and admittance spectra of 36°, 128°, and 163° Y-cut LN in COMSOL; optimized layer thicknesses for half-wavelength resonance to improve acoustic transmission.
- Fabricated two-port transformer prototypes and designed test PCBs with corner-fixed mounting and wire-bonded electrical interconnects.
- Characterized resonance frequencies, Q, and k<sup>2</sup> using VNA measurements; evaluated nonlinearity and power handling under high-power excitation, TCF over temperature, and power-transfer efficiency.

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<img src="images/Power.jpg" alt="Multiphase synchronous buck converter model" width="100%">
</div>
</div>
<div class="paper-box-text" markdown="1">

**Modeling and Control of Multiphase Buck Converters**

Advised by Prof. [Yicheng Zhu](https://scholar.google.com/citations?user=XdHExrYAAAAJ&hl=en&oi=ao), UT<br>
*Feb. 2026 – Jun. 2026*

- Developed state-space averaged and small-signal models of multiphase buck converters; analyzed converter dynamics and loop-gain characteristics for feedback-controller design.
- Implemented voltage-mode, peak/average current-mode, COT and V<sup>2</sup> control in PLECS; evaluated closed-loop stability through frequency-domain analysis and dynamic regulation through time-domain simulations.
- Compared transient responses across different control strategies, quantifying trade-offs in voltage deviation, settling time, and implementation complexity.

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">Transducers 2025</div>
<img src="images/transducers.png" alt="MEMS gas sensor arrays with patterned sensing materials" width="100%">
</div>
</div>
<div class="paper-box-text" markdown="1">

**MEMS Gas Sensor Arrays with Wafer-Level Material Patterning**

Advised by Prof. [Fei Wang](https://scholar.google.com/citations?hl=en&user=xd7lNYEAAAAJ), SUSTech<br>
*Jun. 2023 – Apr. 2025*

- Optimized a backside-etched microheater structure, reducing heating power consumption by 25% compared with the frontside-etched design.
- Developed a wafer-level multi-step photolithography process for patterning multiple gas-sensing materials on MEMS sensor arrays, and fabricated devices through lithography, deposition and etching.
- Applied support vector machine (SVM) models to sensor-array responses, achieving 100% gas classification accuracy and R<sup>2</sup> ≥ 0.98 for concentration prediction on a test set.

</div>
</div>

## Publications

- [MEMS Gas Sensor Arrays with Multilayer of Nanomaterials Patterned by Wafer-Level Photolithography Process](https://doi.org/10.1109/Transducers61432.2025.11110438), **X. Sun**, J. Li, T. Cheng, and F. Wang, **Transducers 2025**, Orlando, FL, USA.

- [MEMS Gas Sensor with On-chip Electrospun Ru-SnO₂ Nanospheres Patterned by Photolithography](https://doi.org/10.1109/SENSORS60989.2024.10784716), J. Li, **X. Sun**, T. Cheng, and F. Wang, **IEEE SENSORS 2024**, Kobe, Japan.

- [MEMS Acetone Gas Sensors with Eu-doped SnO₂/In₂O₃ Nanofibers Using Electrospinning and Lithography Patterning Technique](https://doi.org/10.1109/SENSORS60989.2024.10785144), T. Cheng, J. Li, G. Niu, **X. Sun**, and F. Wang, **IEEE SENSORS 2024**, Kobe, Japan.

- [MEMS Gas Sensors with Metal-Oxide Semiconductor Materials Patterned at Wafer-Level by Photolithography Technique](https://doi.org/10.1109/SENSORS56945.2023.10324896), X. Liu, G. Niu, J. Li, Y. Zhuang, **X. Sun**, and F. Wang, **IEEE SENSORS 2023**, Vienna, Austria.

<span class='anchor' id='course-experience'></span>
# 📚 Course Experience

## 24–48 V Synchronous Boost Converter Implementation

*Jan. 2026 – Jun. 2026*<br>
Instructor: Prof. [Yicheng Zhu](https://scholar.google.com/citations?user=XdHExrYAAAAJ&hl=en&oi=ao)<br>
Course: Power Electronic Devices and Systems

- Designed and laid out a 250-W, 24–48 V synchronous boost converter on a four-layer PCB in KiCad, minimizing high-di/dt commutation and gate-drive loop areas to reduce parasitic inductance.
- Designed and built the power inductor and programmed a TI C2000 MCU for complementary PWM with dead time and synchronized ADC sensing of input/output voltages and inductor current.
- Assembled and tested the converter under load; characterized switching waveforms, voltage/current ripple, and load-dependent efficiency. Achieved a peak conversion efficiency of 95.7%.

## Synchronous Buck Converter Design with V<sup>2</sup> Peak Control

*Sep. 2025 – Nov. 2025*<br>
Instructor: Prof. Alex Q. Huang<br>
Course: PMIC

- Designed and simulated a synchronous buck converter with V<sup>2</sup> peak control in Cadence Virtuoso, operating in PWM mode at high load and PFM mode at light load for enhanced efficiency.
- Integrated a complete control system, incorporating ramp generator, comparator, compensation network, gate drivers with dead-time control, and OCP and OVP protection.
- Optimized transistor sizing and passive component to minimize the overall design footprint.

## University of California, Berkeley (Summer Extension Program)

*Jun. 2023 – Aug. 2023*

- GPA: 4.0/4.0

<span class='anchor' id='honors-and-awards'></span>
# 🎖 Honors and Awards
- *2025* Cockrell School of Engineering Fellowship, The University of Texas at Austin
- *2025* Outstanding Undergraduate Graduate/Outstanding Undergraduate Thesis, Southern University of Science and Technology
- *2024* National Scholarship, Ministry of Education of China
- *2024, 2023* First-Class Scholarship, Southern University of Science and Technology


<span class='anchor' id='news'></span>
# 🔥 News
- *2026.03:* Joined Prof. Ruochen Lu’s RAM Lab at UT. Grateful for this opportunity!
- *2025.08:* Started my M.S. studies in Mechanical Engineering at The University of Texas at Austin!
- *2025.08:* Awarded the Cockrell School of Engineering Fellowship at The University of Texas at Austin.
- *2025.07:* Received my B.E. degree from SUSTech. Deeply grateful to Prof. Fei Wang and all members of the MEMS Group. I will always cherish my wonderful time at SUSTech.
- *2025.06:* Received the Outstanding Undergraduate Graduate and Outstanding Undergraduate Thesis awards from Southern University of Science and Technology.
- *2025.06:* My paper on MEMS gas sensor arrays was presented at Transducers 2025 in Orlando, Florida.
- *2024.12:* Awarded the National Scholarship!
- *2024.10:* My paper on MEMS gas sensors was presented at IEEE SENSORS 2024 in Kobe, Japan.


<span class='anchor' id='play-hard'></span>

# 😎 Play Hard
I graduated from Southern University of Science and Technology in 2025. I am deeply grateful to all the teachers, friends and family members who supported me along the way. SUSTech gave me countless precious memories, I will keep these precious memories in my heart forever.

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px;">
  <img src="images/sustech1.jpg" alt="SUSTech memory 1" style="width: 100%; height: 260px; object-fit: contain;">
  <img src="images/sustech2.jpg" alt="SUSTech memory 2" style="width: 100%; height: 260px; object-fit: cover;">
  <img src="images/sustech3.png" alt="SUSTech memory 3" style="width: 100%; height: 260px; object-fit: cover;">
  <img src="images/sustech4.jpg" alt="SUSTech memory 4" style="width: 100%; height: 260px; object-fit: cover;">
</div>

<div style="height: 32px;"></div>

I'm also a big fan of classical music. I spent four joyful years with the SUSTech Philharmonic, and one year as orchestra president. I participated in more than 20 performances. I also enjoy attending concerts and have heard performances by the San Francisco Symphony Orchestra, New York Philharmonic, and National Symphony Orchestra. My favorite piece is Sibelius’s Violin Concerto in D minor.

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 20px; width: 100%;">
  <img src="images/orchestra1.jpg" alt="SUSTech Philharmonic performance" style="width: 100%; height: 260px; object-fit: cover;">
  <img src="images/orchestra2.jpg" alt="SUSTech Philharmonic memory" style="width: 100%; height: 260px; object-fit: cover;">
  <img src="images/orchestra3.jpg" alt="Classical music performance" style="width: 100%; height: 260px; object-fit: cover;">
</div>

<div style="height: 32px;"></div>

I also love traveling and exploring different landscapes. Yosemite is my favorite national park.


<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 10px;">
  <img src="images/travel1.jpg" alt="Travel landscape 1" style="width: 100%; height: 220px; object-fit: cover;">
  <img src="images/travel2.jpg" alt="Travel landscape 2" style="width: 100%; height: 220px; object-fit: cover;">
  <img src="images/travel3.jpg" alt="Yosemite National Park" style="width: 100%; height: 220px; object-fit: cover;">
  <img src="images/travel4.jpg" alt="Travel landscape 4" style="width: 100%; height: 220px; object-fit: cover;">
  <img src="images/travel5.jpg" alt="Travel landscape 5" style="width: 100%; height: 220px; object-fit: cover;">
  <img src="images/travel6.jpg" alt="Travel landscape 6" style="width: 100%; height: 220px; object-fit: cover;">
</div>

<p style="margin-top: 48px; margin-bottom: 48px;"><strong>I am seeking Ph.D. opportunities in Power Electronics for Fall 2027.</strong></p>
