import fileCode from '@/public/svg/file-code.svg'
import handShake from '@/public/svg/Handshake-Company.svg'
import shieldDollar from '@/public/svg/Shield-Dollar.svg'
import userGroup from '@/public/svg/user-group.svg'

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
        {title: "Leading with Innovation", svg: fileCode, description: "We leverage cutting-edge IT solutions to guarantee maximum compatibility and scalability for our software, facilitating seamless future development." },
        {title: "Competitive Pricing", svg: shieldDollar, description: "Our market-leading prices cater to students, ensuring affordability without compromising quality. Our rates are not just reasonable; they're unbeatable." },
        {title: "Fast Turnaround", svg: handShake, description: "Experience unmatched speed with our fast turnaround times. We prioritize efficiency without sacrificing quality!" },
        {title: "Transparent Communication", svg: userGroup, description: "Our commitment to transparent communication ensures clarity and honesty in every interaction, fostering trust and understanding" },
    ],

    serviceHighlightsDashBoard: {title: "Customer Service Dashboard", svg: fileCode, description: "Within our client panel, users have a range of options at their fingertips. From reporting program defects to submitting requests for further development, the platform serves as a hub for streamlined communication. Our team diligently monitors the panel, ensuring that all inquiries are promptly addressed and any necessary actions are taken.", buttonTextDashboard: "Customer Dashboard", buttonTextFind: "Find out more" },

    projects: [
        { title: "1", img: "https://via.placeholder.com/400x200", description: "Subheading describing your site, too", url: "https://youtube.com" },
        { title: "2", img: "https://via.placeholder.com/400x200", description: "Subheading describing your site, too", url: "https://youtube.com" },
        { title: "3", img: "https://via.placeholder.com/400x200", description: "Subheading describing your site, too", url: "https://youtube.com" },
        { title: "4", img: "https://via.placeholder.com/400x200", description: "Subheading describing your site, too", url: "https://youtube.com" },
    ]
}

export default config; 