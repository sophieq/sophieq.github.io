import wish_logo from "../assets/work/wish_logo.png";
import htn_logo from "../assets/work/htn_logo.png";
import wattpad_logo from "../assets/work/wattpad_logo.png";
import blueprint_logo from "../assets/work/blueprint_logo.png";
import td_logo from "../assets/work/td_logo.png";
import cc3k from "../assets/work/cc3k_product.png";
import mimelons from "../assets/work/mimelons_product.png";
import dancefest from "../assets/work/dancefest_product_transparent.png";

class ExperienceSpec {
    constructor(
        img,
        company,
        title,
        description,
        skills,
        color,
        link,
        isShortCard
    ) {
        this.img = img;
        this.company = company;
        this.title = title;
        this.description = description;
        this.skills = skills;
        this.color = color;
        this.link = link;
        this.isShortCard = isShortCard;
    }
}

export const WorkData = [
    new ExperienceSpec(
        wish_logo,
        "Wish",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "MongoDB", "Backend"],
        "#2fb7ec",
        "http://www.wish.com",
        false
    ),
    new ExperienceSpec(
        wattpad_logo,
        "Wattpad",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "Objective C"],
        "#EC6333",
        "http://www.wattpad.com",
        false
    ),
    new ExperienceSpec(
        td_logo,
        "TD Lab",
        "Software Developer Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "YOLO"],
        "#35B234",
        "https://tdlab.io/",
        false
    ),
];

export const ExtracurricularData = [
    new ExperienceSpec(
        htn_logo,
        "Hack the North",
        "Backend Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Student Org", "Python", "SQL"],
        "#183249",
        "https://hackthenorth.com/",
        false
    ),
    new ExperienceSpec(
        blueprint_logo,
        "Blueprint",
        "Project Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Student Org", "Android", "Kotlin", "Python", "React"],
        "#1078E9",
        "https://uwblueprint.org/",
        false
    ),
];

export const ProjectData = [
    [
        new ExperienceSpec(
            dancefest,
            "DanceFest",
            "Android App",
            "An adjudication app that automated the judging process the annual OSS Dance Festival; increased scalability of event to 500+ participants.",
            ["UW Blueprint", "Android", "Kotlin", "Firebase"],
            "#292929",
            "https://uwblueprint.org/",
            true
        ),
        new ExperienceSpec(
            mimelons,
            "Mi Melons",
            "iOS App",
            "An app that guides women through their monthly breast exam to check for lumps and irregularities. Users are able to track their past exams and symptoms.",
            ["Hack the North 2019", "iOS", "Swift", "Python", "React"],
            "#BECE8E",
            "https://uwblueprint.org/",
            true
        ),
    ],
    [
        new ExperienceSpec(
            cc3k,
            "Chamber Crawler",
            "C++ Project",
            "A RPB game created in C++. to be played in the command line. Utilized MVC framework",
            ["C++", "mvc"],
            "#a6d2d2",
            "https://uwblueprint.org/",
            true
        ),
        new ExperienceSpec(
            blueprint_logo,
            "Personal Website",
            "This Website!",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
            ["React", "JavaScript", "HTML", "CSS"],
            "#a6d2d2",
            "https://uwblueprint.org/",
            true
        ),
    ],
];

export const PreviewData = [
    new ExperienceSpec(
        wish_logo,
        "",
        "",
        "scaling e-commerce sales for thousands products,",
        [],
        "#2fb7ec",
        false
    ),
    new ExperienceSpec(
        htn_logo,
        "",
        "",
        "building Canada’s largest hackathon,",
        [],
        "#183249",
        "",
        false
    ),
    new ExperienceSpec(
        wattpad_logo,
        "",
        "",
        "introducing new ways for digital readers to interact with Wattpad Coins,",
        [],
        "#EC6333",
        "",
        false
    ),
];
