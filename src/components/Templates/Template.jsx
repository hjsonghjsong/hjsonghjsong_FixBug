import React, { useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { IconButton, List, ListItem, ListItemButton } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import "./Template.css";

const templates = [
  <div className="w-[595px] h-[842px] relative bg-white template-container">
    <div className="w-[245px] h-[362px] left-[318px] top-[232px] absolute">
      <div className="left-0 top-0 absolute text-amber-600 text-sm font-normal leading-tight">
        Education & Learning
      </div>
      <div className="left-0 top-[28px] absolute text-neutral-800 text-xs font-normal leading-tight">
        Master’s in Human-Computer Interaction
      </div>
      <div className="w-[245px] left-0 top-[48px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Copenhagen School of Design and Technology, 2015 – 2016
      </div>
      <div className="left-0 top-[96px] absolute text-neutral-800 text-xs font-normal leading-tight">
        Bachelor's of Arts
      </div>
      <div className="w-[245px] left-0 top-[116px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Copenhagen School of Design and Technology, 2011 – 2015
      </div>
      <div className="left-0 top-[218px] absolute text-neutral-800 text-xs font-normal leading-tight">
        UX: Interaction Design
      </div>
      <div className="w-[245px] left-0 top-[238px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Trydesignlab.com, Dec 2017
      </div>
      <div className="left-0 top-[172px] absolute text-neutral-800 text-xs font-normal leading-tight">
        Design Leadership Masterclass
      </div>
      <div className="w-[245px] left-0 top-[192px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Design Lab Inc., Mar 2020
      </div>
      <div className="left-0 top-[264px] absolute text-neutral-800 text-xs font-normal leading-tight">
        UX Design Specialization
      </div>
      <div className="w-[245px] left-0 top-[284px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Udacity.com, online course by Google, <br />
        Aug 2016
      </div>
      <div className="left-0 top-[326px] absolute text-neutral-800 text-xs font-normal leading-tight">
        Branding fundamentals
      </div>
      <div className="w-[245px] left-0 top-[346px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Design Lab Inc., Nov 2014
      </div>
    </div>
    <div className="left-[32px] top-[230px] absolute text-amber-600 text-sm font-normal leading-tight">
      Work experience
    </div>
    <div className="w-[254px] h-[100px] left-[32px] top-[260px] absolute">
      <div className="left-0 top-0 absolute text-neutral-800 text-sm font-normal leading-tight">
        Product Designer
      </div>
      <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Fintef, Oct 2019 - Present
      </div>
      <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Designing end-to-end experience for financial products on mobile & web
        platforms. Working closely with managers, marketing specialists and
        developers.
      </div>
    </div>
    <div className="w-[254px] h-32 left-[32px] top-[376px] absolute">
      <div className="left-0 top-0 absolute text-neutral-800 text-sm font-normal leading-tight">
        UX Designer
      </div>
      <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Rewamped website flows and navigation menus, reducing the frequency of
        misdirected customer service queries by 30%. Conducted user testing with
        10+ participants using UserTesting.com; designed agains findings which
        reduced bounce rate for primary user flow by 30%.
      </div>
      <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Resume Worded, Sep 2017 – Sep 2019
      </div>
    </div>
    <div className="w-[254px] h-[142px] left-[32px] top-[520px] absolute">
      <div className="left-0 top-0 absolute text-neutral-800 text-sm font-normal leading-tight">
        Associate UX Designer
      </div>
      <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Redesigned company’s homepage and lead generation forms using existing
        design system; reduced bounce rates by 40% and increased leads by 15%.
        <br />
        Designed online customer support center comprising of a self-service
        knowledge base and interactive chat bot. Coached 15 summer interns.
      </div>
      <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
        Growshi, Dec 2016 – Aug 2017
      </div>
    </div>
    <div className="w-[544px] h-[126px] left-[32px] top-[686px] absolute">
      <div className="left-0 top-0 absolute text-amber-600 text-sm font-normal leading-tight">
        Skills
      </div>
      <div className="w-40 left-0 top-[28px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Product discovery
        <br />
        Business analysis <br />
        UX research & testing
        <br />
        Customer journey mapping
        <br />
        Information architecture
        <br />
        Wireframing <br />
        Prototyping
      </div>
      <div className="w-40 left-[192px] top-[28px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        UI design
        <br />
        Illustration
        <br />
        Interaction design
        <br />
        Design system
        <br />
        Design sprints
        <br />
        Workshop facilitation
        <br />
        A/B testing
      </div>
      <div className="w-40 left-[384px] top-[28px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Figma <br />
        Sketch
        <br />
        Adobe Illustrator
        <br />
        ProtoPie <br />
        Miro
        <br />
        Notion
        <br />
        Jira
      </div>
    </div>
    <div className="w-[595px] h-[200px] left-0 top-0 absolute">
      <div className="w-[157px] h-[58px] left-[398px] top-[40px] absolute">
        <div className="left-[18px] top-[22px] absolute text-neutral-800 text-[10px] font-normal underline leading-[14px]">
          linkedin.com/in/kate-bishop
        </div>
        <div className="left-[18px] top-0 absolute text-neutral-800 text-[10px] font-normal underline leading-[14px]">
          kate.bishop@katedesign.com
        </div>
        <div className="left-[18px] top-[44px] absolute text-neutral-800 text-[10px] font-normal underline leading-[14px]">
          +46 98-765 43 21
        </div>
        <img
          className="w-3 h-3 left-0 top-[44px] absolute"
          src="https://via.placeholder.com/12x12"
        />
        <div className="w-3 h-3 left-0 top-[23px] absolute justify-center items-center inline-flex">
          <img className="w-3 h-3" src="https://via.placeholder.com/12x12" />
        </div>
        <div className="w-3 h-3 left-0 top-[1px] absolute justify-center items-center inline-flex">
          <img className="w-3 h-3" src="https://via.placeholder.com/12x12" />
        </div>
      </div>
      <div className="left-[156px] top-[60px] absolute text-neutral-800 text-[35px] font-normal leading-[42px]">
        Kate <br />
        Bishop
      </div>
      <div className="left-[157px] top-[36px] absolute text-amber-600 text-sm font-normal leading-normal">
        Product Designer
      </div>
      <img
        className="w-[104px] h-[104px] left-[32px] top-[36px] absolute rounded-[72px] border"
        src="https://via.placeholder.com/104x104"
      />
    </div>
  </div>,
  <div className="w-[595px] h-[842px] relative bg-white template-container">
    <div className="h-[196px] left-[310px] top-[590px] absolute">
      <div className="left-0 top-0 absolute text-cyan-600 text-sm font-medium leading-tight">
        Skills
      </div>
      <div className="w-[245px] left-0 top-[28px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Business Analysis, UX Research, User Testing and Validation, Customer
        Journey Mapping, Information Architecture, Low- and High- Fidelity
        Wireframing, Prototyping, Interaction Design, Visual Design, Defining
        Product Specifications, Design System Development, Design Sprints, A/B
        Testing.
        <br />
        <br />
        Experienced with Kanban, Agile & Lean methodologies.
        <br />
        <br />
        Coding fundamentals. HTML, CSS, JavaScript, SQL
      </div>
    </div>
    <div className="w-[258px] h-[366px] left-[310px] top-[200px] absolute">
      <div className="left-0 top-0 absolute text-cyan-600 text-sm font-medium leading-tight">
        Education & Learning
      </div>
      <div className="w-[258px] h-[52px] left-0 top-[32px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Master’s in Human-Computer Interaction
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Copenhagen School of Design and Technology, 2015 – 2016
        </div>
      </div>
      <div className="w-[245px] h-[52px] left-0 top-[100px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Bachelor's of Arts
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Copenhagen School of Design and Technology, 2011 – 2015
        </div>
      </div>
      <div className="w-[245px] h-9 left-0 top-[222px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          UX: Interaction Design
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Trydesignlab.com, Dec 2017
        </div>
      </div>
      <div className="w-[245px] h-9 left-0 top-[176px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Design Leadership Masterclass
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Design Lab Inc., Mar 2020
        </div>
      </div>
      <div className="w-[245px] h-[52px] left-0 top-[268px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          UX Design Specialization
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Udacity.com, online course by Google, <br />
          Aug 2016
        </div>
      </div>
      <div className="w-[245px] h-9 left-0 top-[330px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Branding fundamentals
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Design Lab Inc., Nov 2014
        </div>
      </div>
    </div>
    <div className="w-[254px] h-[602px] left-[32px] top-[200px] absolute">
      <div className="left-0 top-0 absolute text-cyan-600 text-sm font-medium leading-tight">
        Work experience
      </div>
      <div className="w-[254px] h-[100px] left-0 top-[32px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          Product Designer
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Fintef, Oct 2019 - Present
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Designing end-to-end experience for financial products on mobile & web
          platforms. Working closely with managers, marketing specialists and
          developers.
        </div>
      </div>
      <div className="w-[254px] h-32 left-0 top-[156px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          UX Designer
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Rewamped website flows and navigation menus, reducing the frequency of
          misdirected customer service queries by 30%. Conducted user testing
          with 10+ participants using UserTesting.com; designed agains findings
          which reduced bounce rate for primary user flow by 30%.
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Resume Worded, Sep 2017 – Sep 2019
        </div>
      </div>
      <div className="w-[254px] h-[142px] left-0 top-[308px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          Associate UX Designer
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Redesigned company’s homepage and lead generation forms using existing
          design system; reduced bounce rates by 40% and increased leads by 15%.
          <br />
          Designed online customer support center comprising of a self-service
          knowledge base and interactive chat bot. Coached 15 summer interns.
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Growshi, Dec 2016 – Aug 2017
        </div>
      </div>
      <div className="w-[254px] h-32 left-0 top-[474px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          UX Analyst
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Managed redesign of internal tracking system in use by 125 employees,
          resulting in 20+ new features and 25% higher engagement.
          <br />
          Worked with product managers to validate design hypothesis by
          conducting interviews and usability sessions.
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Growshi, Mar 2016 – Dec 2016
        </div>
      </div>
    </div>
    <div className="w-[595px] h-44 left-0 top-0 absolute">
      <div className="w-[595px] h-44 left-0 top-0 absolute bg-sky-100 bg-opacity-50" />
      <div className="left-[102px] top-[32px] absolute text-neutral-800 text-[26px] font-semibold leading-[34px]">
        Kate Bishop
      </div>
      <div className="left-[102px] top-[66px] absolute text-cyan-600 text-base font-medium leading-normal">
        Product Designer
      </div>
      <div className="w-[313px] left-[32px] top-[104px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Over 5 years of professional experience conducting UX research and
        designing interactive end-to-end user flows. <br />I enjoy working in
        close collaboration with teams across technology, business and design.
      </div>
      <div className="w-[154px] h-[108px] left-[385px] top-[40px] absolute">
        <div className="left-0 top-[54px] absolute text-black text-[10px] font-semibold underline leading-[14px]">
          linkedin.com/in/kate-bishop
        </div>
        <div className="left-0 top-0 absolute text-cyan-600 text-[10px] font-medium leading-[14px]">
          Email
        </div>
        <div className="left-0 top-[80px] absolute text-cyan-600 text-[10px] font-medium leading-[14px]">
          Phone
        </div>
        <div className="left-0 top-[40px] absolute text-cyan-600 text-[10px] font-medium leading-[14px]">
          LinkedIn
        </div>
        <div className="left-0 top-[14px] absolute text-neutral-800 text-[10px] font-semibold underline leading-[14px]">
          kate.bishop@katedesign.com
        </div>
        <div className="left-0 top-[94px] absolute text-neutral-800 text-[10px] font-semibold underline leading-[14px]">
          +46 98-765 43 21
        </div>
      </div>
      <img
        className="w-[58px] h-[58px] left-[32px] top-[32px] absolute rounded-[72px] border border-zinc-300"
        src="https://via.placeholder.com/58x58"
      />
    </div>
  </div>,
  <div className="w-[595px] h-[842px] relative bg-white template-container">
    <div className="w-[371px] h-[612px] left-[200px] top-[24px] absolute bg-stone-50 rounded-lg" />
    <div className="w-[547px] h-[164px] left-[24px] top-[654px] absolute bg-stone-50 rounded-lg" />
    <div className="left-[314px] top-[706px] absolute text-neutral-800 text-[9px] font-bold leading-[14px]">
      UX: Interaction Design
    </div>
    <div className="left-[314px] top-[670px] absolute text-neutral-800 text-[9px] font-bold leading-[14px]">
      Design Leadership Masterclass
    </div>
    <div className="left-[314px] top-[742px] absolute text-neutral-800 text-[9px] font-bold leading-[14px]">
      UX Design Specialization
    </div>
    <div className="w-[245px] left-[314px] top-[720px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Trydesignlab.com, Dec 2017
    </div>
    <div className="left-[314px] top-[684px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Design Lab Inc., Mar 2020
    </div>
    <div className="left-[314px] top-[756px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Udacity.com, online course by Google, Aug 2016
    </div>
    <div className="left-[314px] top-[778px] absolute text-neutral-800 text-[9px] font-bold leading-[14px]">
      Branding fundamentals
    </div>
    <div className="w-[245px] left-[314px] top-[792px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Design Lab Inc., Nov 2014
    </div>
    <div className="left-[40px] top-[260px] absolute text-neutral-800 text-[8px] font-medium underline leading-[14px]">
      linkedin.com/in/kate-bishop
    </div>
    <div className="w-3 h-3 left-[24px] top-[261px] absolute" />
    <div className="left-[24px] top-[28px] absolute text-neutral-800 text-2xl font-bold leading-[30px]">
      Kate <br />
      Bishop
    </div>
    <div className="left-[24px] top-[92px] absolute text-sky-600 text-sm font-semibold leading-tight">
      Product Designer
    </div>
    <div className="w-[154px] left-[24px] top-[124px] absolute text-neutral-800 text-[8px] font-normal leading-3">
      Over 5 years of professional experience conducting UX research and
      designing interactive end-to-end user flows. I enjoy working in close
      collaboration with teams across technology, business and design.
    </div>
    <div className="left-[24px] top-[220px] absolute text-sky-600 text-[9px] font-semibold leading-[14px]">
      Contacts
    </div>
    <div className="left-[24px] top-[318px] absolute text-sky-600 text-[9px] font-semibold leading-[14px]">
      Skills
    </div>
    <div className="left-[24px] top-[586px] absolute text-sky-600 text-[9px] font-semibold leading-[14px]">
      Tools
    </div>
    <div className="left-[40px] top-[238px] absolute text-neutral-800 text-[8px] font-medium underline leading-[14px]">
      kate.bishop@katedesign.com
    </div>
    <div className="left-[40px] top-[280px] absolute text-neutral-800 text-[8px] font-medium underline leading-[14px]">
      +46 98-765 43 21
    </div>
    <div className="w-3 h-3 left-[24px] top-[281px] absolute" />
    <div className="left-[220px] top-[40px] absolute text-neutral-800 text-xs font-bold leading-[18px]">
      Product Designer
    </div>
    <div className="left-[220px] top-[218px] absolute text-neutral-800 text-xs font-bold leading-[18px]">
      UX Designer
    </div>
    <div className="left-[220px] top-[354px] absolute text-neutral-800 text-xs font-bold leading-[18px]">
      Associate UX Designer
    </div>
    <div className="left-[220px] top-[490px] absolute text-neutral-800 text-xs font-bold leading-[18px]">
      UX Analyst
    </div>
    <div className="left-[220px] top-[62px] absolute text-sky-600 text-[9px] font-semibold leading-3">
      Fintef, Oct 2019 - Present
    </div>
    <div className="w-[338px] left-[220px] top-[82px] absolute text-neutral-800 text-[9px] font-normal leading-[14px]">
      • Designed end-to-end experience for financial products on mobile & web
      platforms.
      <br />• Working closely with managers, marketing specialists and
      developers.
      <br />• Did user testing sessions to gather feedback, validate product
      features and brand perception.
      <br />• Conducted A/B tests for product features and design variations.
      <br />• Led the design process during of the internal rebranding project.
      <br />• Supported the engineering team with design deliverables.
    </div>
    <div className="w-[200px] left-[40px] top-[670px] absolute text-sky-600 text-[9px] font-semibold leading-[14px]">
      Education & Learning
    </div>
    <div className="left-[40px] top-[698px] absolute text-neutral-800 text-[11px] font-bold leading-[18px]">
      Master’s in Human-Computer Interaction
    </div>
    <div className="left-[40px] top-[756px] absolute text-neutral-800 text-[11px] font-bold leading-[18px]">
      Bachelor's of Arts
    </div>
    <div className="w-[200px] left-[40px] top-[716px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Copenhagen School of Design and Technology, Sep 2015 – Jun 2016
    </div>
    <div className="w-[200px] left-[40px] top-[774px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Copenhagen School of Design and Technology, Sep 2011 – Jun 2015
    </div>
    <div className="w-[339px] left-[220px] top-[260px] absolute text-neutral-800 text-[9px] font-normal leading-[14px]">
      • Rewamped website flows and navigation menus, reducing the frequency of
      misdirected customer service queries by 30%. <br />• Conducted user
      testing with 10+ participants using UserTesting.com; designed agains
      findings which reduced bounce rate for primary user flow by 30%.
    </div>
    <div className="w-[339px] left-[220px] top-[396px] absolute text-neutral-800 text-[9px] font-normal leading-[14px]">
      • Redesigned company’s homepage and lead generation forms using existing
      design system; reduced bounce rates by 40% and increased leads by 15%.{" "}
      <br />• Designed online customer support center comprising of a
      self-service knowledge base and interactive chat bot. Coached 15 summer
      interns.
    </div>
    <div className="w-[339px] left-[220px] top-[532px] absolute text-neutral-800 text-[9px] font-normal leading-[14px]">
      • Managed redesign of internal tracking system in use by 125 employees,
      resulting in 20+ new features and 25% higher engagement. <br />• Worked
      with product managers to validate design hypothesis by conducting
      interviews and usability sessions.
    </div>
    <div className="left-[220px] top-[240px] absolute text-sky-600 text-[9px] font-semibold leading-3">
      Resume Worded, Sep 2017 – Sep 2019
    </div>
    <div className="left-[220px] top-[376px] absolute text-sky-600 text-[9px] font-semibold leading-3">
      Growshi, Dec 2016 – Aug 2017
    </div>
    <div className="left-[220px] top-[512px] absolute text-sky-600 text-[9px] font-semibold leading-3">
      Growshi, Mar 2016 – Dec 2016
    </div>
    <div className="w-3 h-3 pl-[0.58px] pr-[0.60px] pt-[2.56px] pb-0.5 left-[24px] top-[239px] absolute justify-center items-center inline-flex">
      <div className="w-[10.82px] h-[7.44px] relative"></div>
    </div>
    <div className="left-[24px] top-[336px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Product discovery
      <br />
      Business analysis <br />
      UX research
      <br />
      User testing
      <br />
      Customer journey mapping
      <br />
      Information architecture
      <br />
      Wireframing <br />
      Prototyping
      <br />
      UI design
      <br />
      Illustration
      <br />
      Interaction design
      <br />
      Design system
      <br />
      Design sprints
      <br />
      Workshop facilitation
      <br />
      A/B testing
      <br />
      Kanban, agile & scrum
      <br />
      Product management
    </div>
    <div className="left-[24px] top-[604px] absolute text-neutral-800 text-[8px] font-normal leading-[14px]">
      Figma, Sketch, Adobe Illustrator, ProtoPie, <br />
      Framer, Miro, Notion, Jira
    </div>
  </div>,
  <div className="w-[595px] h-[842px] relative bg-white template-container">
    <div className="h-[210px] left-[310px] top-[590px] absolute">
      <div className="left-0 top-0 absolute text-sky-600 text-sm font-medium leading-tight">
        Skills
      </div>
      <div className="w-[245px] left-0 top-[28px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Business Analysis, UX Research, User Testing and Validation, Customer
        Journey Mapping, Information Architecture, Low- and High- Fidelity
        Wireframing, Prototyping, Interaction Design, Visual Design, Defining
        Product Specifications, Design System Development, Design Sprints, A/B
        Testing.
        <br />
        <br />
        Experienced with Kanban, Agile & Lean methodologies.
        <br />
        <br />
        Coding fundamentals. HTML & CSS, JavaScript, SQL.
      </div>
    </div>
    <div className="w-[258px] h-[366px] left-[310px] top-[200px] absolute">
      <div className="left-0 top-0 absolute text-sky-600 text-sm font-medium leading-tight">
        Education & Learning
      </div>
      <div className="w-[258px] h-[52px] left-0 top-[32px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Master’s in Human-Computer Interaction
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Copenhagen School of Design and Technology, 2015 – 2016
        </div>
      </div>
      <div className="w-[245px] h-[52px] left-0 top-[100px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Bachelor's of Arts
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Copenhagen School of Design and Technology, 2011 – 2015
        </div>
      </div>
      <div className="w-[245px] h-9 left-0 top-[222px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          UX: Interaction Design
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Trydesignlab.com, Dec 2017
        </div>
      </div>
      <div className="w-[245px] h-9 left-0 top-[176px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Design Leadership Masterclass
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Design Lab Inc., Mar 2020
        </div>
      </div>
      <div className="w-[245px] h-[52px] left-0 top-[268px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          UX Design Specialization
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-medium leading-none">
          Udacity.com, online course by Google, <br />
          Aug 2016
        </div>
      </div>
      <div className="w-[245px] h-9 left-0 top-[330px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">
          Branding fundamentals
        </div>
        <div className="w-[245px] left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Design Lab Inc., Nov 2014
        </div>
      </div>
    </div>
    <div className="w-[254px] h-[602px] left-[32px] top-[200px] absolute">
      <div className="left-0 top-0 absolute text-sky-600 text-sm font-medium leading-tight">
        Work experience
      </div>
      <div className="w-[254px] h-[100px] left-0 top-[32px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          Product Designer
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Fintef, Oct 2019 - Present
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Designing end-to-end experience for financial products on mobile & web
          platforms. Working closely with managers, marketing specialists and
          developers.
        </div>
      </div>
      <div className="w-[254px] h-32 left-0 top-[156px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          UX Designer
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Rewamped website flows and navigation menus, reducing the frequency of
          misdirected customer service queries by 30%. Conducted user testing
          with 10+ participants using UserTesting.com; designed agains findings
          which reduced bounce rate for primary user flow by 30%.
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Resume Worded, Sep 2017 – Sep 2019
        </div>
      </div>
      <div className="w-[254px] h-[142px] left-0 top-[308px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          Associate UX Designer
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Redesigned company’s homepage and lead generation forms using existing
          design system; reduced bounce rates by 40% and increased leads by 15%.
          <br />
          Designed online customer support center comprising of a self-service
          knowledge base and interactive chat bot. Coached 15 summer interns.
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Growshi, Dec 2016 – Aug 2017
        </div>
      </div>
      <div className="w-[254px] h-32 left-0 top-[474px] absolute">
        <div className="left-0 top-0 absolute text-neutral-800 text-sm font-bold leading-tight">
          UX Analyst
        </div>
        <div className="w-[254px] left-0 top-[44px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
          Managed redesign of internal tracking system in use by 125 employees,
          resulting in 20+ new features and 25% higher engagement.
          <br />
          Worked with product managers to validate design hypothesis by
          conducting interviews and usability sessions.
        </div>
        <div className="left-0 top-[20px] absolute text-neutral-500 text-[11px] font-normal leading-none">
          Growshi, Mar 2016 – Dec 2016
        </div>
      </div>
    </div>
    <div className="w-[595px] h-44 left-0 top-0 absolute">
      <div className="w-[595px] h-44 left-0 top-0 absolute bg-stone-50" />
      <div className="left-[32px] top-[32px] absolute text-neutral-800 text-[26px] font-bold leading-[34px]">
        Kate Bishop
      </div>
      <div className="left-[32px] top-[66px] absolute text-sky-600 text-base font-medium leading-normal">
        Product Designer
      </div>
      <div className="w-[313px] left-[32px] top-[104px] absolute text-neutral-800 text-[10px] font-normal leading-[14px]">
        Over 5 years of professional experience conducting UX research and
        designing interactive end-to-end user flows. <br />I enjoy working in
        close collaboration with teams across technology, business and design.
      </div>
      <div className="w-[154px] h-[108px] left-[385px] top-[40px] absolute">
        <div className="left-0 top-[54px] absolute text-black text-[10px] font-semibold underline leading-[14px]">
          linkedin.com/in/kate-bishop
        </div>
        <div className="left-0 top-0 absolute text-zinc-500 text-[10px] font-medium leading-[14px]">
          Email
        </div>
        <div className="left-0 top-[80px] absolute text-zinc-500 text-[10px] font-medium leading-[14px]">
          Phone
        </div>
        <div className="left-0 top-[40px] absolute text-zinc-500 text-[10px] font-medium leading-[14px]">
          LinkedIn
        </div>
        <div className="left-0 top-[14px] absolute text-neutral-800 text-[10px] font-semibold underline leading-[14px]">
          kate.bishop@katedesign.com
        </div>
        <div className="left-0 top-[94px] absolute text-neutral-800 text-[10px] font-semibold underline leading-[14px]">
          +46 98-765 43 21
        </div>
      </div>
    </div>
  </div>,
];

const Template = () => {
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);

  const showNextTemplate = () => {
    setCurrentTemplateIndex((currentTemplateIndex + 1) % templates.length);
  };

  const showPrevTemplate = () => {
    setCurrentTemplateIndex(
      (currentTemplateIndex - 1 + templates.length) % templates.length
    );
  };

  const isFirstTemplate = currentTemplateIndex === 0;
  const isLastTemplate = currentTemplateIndex === templates.length - 1;
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center">
        <IconButton onClick={showPrevTemplate} disabled={isFirstTemplate}>
          <ArrowBackIosNewRoundedIcon
            sx={{ color: isFirstTemplate ? "gray" : "white" }}
          />
        </IconButton>
      </div>
      <List>
        <ListItem>
          <ListItemButton sx={{ padding: "0px" }}>
            {templates[currentTemplateIndex]}
          </ListItemButton>
        </ListItem>
      </List>
      <div className="flex justify-center items-center">
        <IconButton onClick={showNextTemplate} disabled={isLastTemplate}>
          <ArrowForwardIosRoundedIcon
            sx={{ color: isLastTemplate ? "gray" : "white" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Template;
