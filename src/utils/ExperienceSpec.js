function ExperienceSpec(img, company, title, description, skills, color, link) {
    this.img = img;
    this.company = company;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.color = color;
    this.link = link;
}

export const ExperienceData = [
    new ExperienceSpec(
        "",
        "Wish",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["iOS", "Python"],
        "#2fb7ec",
        "www.wish.com"
    ),
    new ExperienceSpec(
        "",
        "Wattpad",
        "Software Engineering Intern",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
        ["iOS", "Python"],
        "#EC6333",
        "www.wattpad.com"
    )
];
