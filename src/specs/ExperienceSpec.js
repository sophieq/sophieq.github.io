import wish_logo from "../assets/work/wish_logo.png";
import htn_logo from "../assets/work/htn_logo.png";
import wattpad_logo from "../assets/work/wattpad_logo.png";
import blueprint_logo from "../assets/work/blueprint_logo.png";
import td_logo from "../assets/work/td_logo.png";

class ExperienceSpec {
    constructor(img, company, title, description, skills, color, link) {
        this.img = img;
        this.company = company;
        this.title = title;
        this.description = description;
        this.skills = skills;
        this.color = color;
        this.link = link;
    }
}

export const ExperienceData = [
    new ExperienceSpec(
        wish_logo,
        "Wish",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "SQL", "MongoDB", "Backend"],
        "#2fb7ec",
        "http://www.wish.com"
    ),
    new ExperienceSpec(
        htn_logo,
        "Hack the North",
        "Backend Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Student Org", "Python", "SQL"],
        "#183249",
        "https://hackthenorth.com/"
    ),
    new ExperienceSpec(
        wattpad_logo,
        "Wattpad",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "Objective C"],
        "#EC6333",
        "http://www.wattpad.com"
    ),
    new ExperienceSpec(
        blueprint_logo,
        "Blueprint",
        "Project Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Student Org", "Android", "Kotlin", "Python", "React"],
        "#1078E9",
        "https://uwblueprint.org/"
    ),
    new ExperienceSpec(
        td_logo,
        "TD Lab",
        "Software Developer Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "YOLO"],
        "#35B234",
        "https://tdlab.io/"
    )
];
