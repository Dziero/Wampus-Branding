import fileCode from '@/public/svg/file-code.svg'
import handShake from '@/public/svg/Handshake-Company.svg'
import shieldDollar from '@/public/svg/Shield-Dollar.svg'
import userGroup from '@/public/svg/user-group.svg'

import mailIcom from '@/public/svg/mail-icon.svg'
import pageIcon from '@/public/svg/page-icon.svg'

const config = {
    page_title: "Wampus Branding",
    page_description: "Our programmers group presents its portfolio showcasing various projects, innovative solutions, and technical skills. Discover how we tackle challenges and deliver exceptional results through our collaborative approach to coding and problem-solving.",
    flags: {
        Spanish: 'es',
        Czech: 'cz',
        English: 'gb',
        German: 'de',
        Polish: 'pl',
        Ukrainian: 'ua'
    },

    serviceHighlights: [
        { svg: fileCode },
        { svg: shieldDollar },
        { svg: handShake },
        { svg: userGroup },
    ],

    contactForm: [
        {svg: mailIcom, description: "XXXXXXXXX"},
        {svg: pageIcon, description: "XXXXXXXXX"}
    ],

    serviceHighlightsDashBoard: {
        svg: fileCode,
    },

    projects: [
        { img: "https://via.placeholder.com/400x200", url: "https://youtube.com" },
        { img: "https://via.placeholder.com/400x200", url: "https://youtube.com" },
        { img: "https://via.placeholder.com/400x200", url: "https://youtube.com" },
        { img: "https://via.placeholder.com/400x200", url: "https://youtube.com" },
    ]
}

export default config; 