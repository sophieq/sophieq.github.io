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
        "",
        "Wish",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "SQL", "MongoDB", "Backend"],
        "#2fb7ec",
        "http://www.wish.com"
    ),
    new ExperienceSpec(
        "",
        "Hack the North",
        "Backend Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Student Org", "Python", "SQL"],
        "#183249",
        "https://hackthenorth.com/"
    ),
    new ExperienceSpec(
        "",
        "Wattpad",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "Objective C"],
        "#EC6333",
        "http://www.wattpad.com"
    ),
    new ExperienceSpec(
        "",
        "Blueprint",
        "Project Developer",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Student Org", "Android", "Kotlin", "Python", "React"],
        "#1078E9",
        "https://uwblueprint.org/"
    ),
    new ExperienceSpec(
        "",
        "TD Lab",
        "Software Developer Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["Internship", "iOS", "Python", "Swift", "YOLO"],
        "#5CB336",
        "https://tdlab.io/"
    )
];
