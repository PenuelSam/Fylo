import { quote, access, anyfile,  collabo,  security,  profile1,  profile2, profile3, } from "../images";

export const navLinks = [
    {
        id: "features",
        title: "Features",
    },
    {
        id: "teams",
        title: "Teams",
    },
    {
        id: "signin",
        title: "Sing In",
    },
];

export const features = [
    {
        id: "feature1",
        icon: access,
        title: "Access your files,anywhere",
        content: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
        id: "feature2",
        icon: security,
        title: "Security you can trust",
        content: "Z-factor authentication and user-controlled encryption are just a couple of security features we allow to help secure your files",
    },
];

export const features2 = [
    {
        id: "feature3",
        icon: collabo,
        title: "Real-time collaboration",
        content: "Securely share files and folders with friends, family and collegues for live collaboration. No email attachments required.",
    },
    {
        id: "feature4",
        icon: anyfile,
        title: "Store any type of file",
        content: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
];

export const profiles = [
    {
        id: "profile1",
        qoute: quote,
        content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        photo: profile1,
        name:  "Satish Patel",
        career: "Founder & CEO, Huddle",
    },
    {
        id: "profile2",
        content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        photo: profile2,
        name: "Bruce McKenzle",
        career: "Founder & CEO, Huddle",
    },
    {
        id: "profile3",
        content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        photo: profile3,
        name: "Iva Boyd",
        career: "Founder & CEO, Huddle",
    },
];