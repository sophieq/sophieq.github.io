import React from "react";
import wish_logo from "../assets/work/wish_logo.png";
import htn_logo from "../assets/work/htn_logo.png";
import wattpad_logo from "../assets/work/wattpad_logo.png";
import blueprint_logo from "../assets/work/blueprint_logo.png";
import td_logo from "../assets/work/td_logo.png";
import cc3k from "../assets/work/cc3k_product.png";
import mimelons from "../assets/work/mimelons_product.png";
import dancefest from "../assets/work/dancefest_product_transparent.png";
import website from "../assets/work/website.png";
import image_repo from "../assets/work/image_repo.png";

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
    //    new ExperienceSpec(
    //        shopify_logo,
    //        "shopify",
    //        "backend developer intern • incoming sept 2020",
    //        <div>coming soon!</div>,
    //        [],
    //        "#214D40",
    //        "http://www.wish.com",
    //        false
    //    ),
    new ExperienceSpec(
        wish_logo,
        "wish",
        "software engineering intern • jan - apr 2020",
        (
            <ul>
                <li>
                    built the backend architecture, product selection/push
                    notification infrastructure, and custom pricing logic for
                    Flash Sale, a feature that showcases 100+ products on sale
                    every 4 hours daily using Tornado, MongoDB, and SQL.
                </li>
                <li>
                    implemented redesigns of the current iOS UI, resulting in a
                    $32M increase on gross merchandise value per year.
                </li>
                <li>
                    blocked over 160k fraud accounts per month by modifying the
                    iOS app’s core requests to integrate an internal
                    multi-factor authentication framework.
                </li>
                <li>
                    reduced day 0 drop-off for new users by 12% and increased a
                    user's lifetime value by 5%, through building new onboarding
                    experiences.
                </li>
            </ul>
        ),
        [
            "Internship",
            "Python",
            "Tornado",
            "MongoDB",
            "mongoengine",
            "sql",
            "iOS",
            "Swift",
        ],
        "#2fb7ec",
        "http://www.wish.com",
        false
    ),
    new ExperienceSpec(
        wattpad_logo,
        "wattpad",
        "software engineering intern • may - aug 2019",
        (
            <ul>
                <li>
                    increased weekly paying users by 15% through integrating
                    Mopub rewarded video ads into the iOS platform.
                </li>
                <li>
                    piloted a coin gifting experiment to 50% of US iOS users,
                    resulting in an estimated $10k increase in monthly revenue.
                </li>
                <li>
                    automated tests for purchasing coins using XCUITest to
                    increase code coverage on the iOS app.
                </li>
            </ul>
        ),
        ["Internship", "iOS", "Python", "Swift", "Objective C"],
        "#EC6333",
        "http://www.wattpad.com",
        false
    ),
    new ExperienceSpec(
        td_logo,
        "td lab",
        "software developer intern • sep - dec 2018",
        (
            <ul>
                <li>
                    improved component positions of a YOLOv2 machine learning
                    app that converts paper wireframes into interactive user
                    interfaces by adding symmetry detection logic.
                </li>
                <li>
                    prototyped a real-time iOS chat app using Firestore, chosen
                    as best solution during Hack Week
                </li>
                <li>
                    pitched functional prototypes to TD Innovation EVPs for
                    commercialization.
                </li>
            </ul>
        ),
        [
            "Internship",
            "iOS",
            "Python",
            "Swift",
            "YOLOv3",
            "Firebase",
            "HTML/CSS",
        ],
        "#35B234",
        "https://tdlab.io/",
        false
    ),
];

export const ExtracurricularData = [
    new ExperienceSpec(
        htn_logo,
        "hack the north",
        "backend developer • feb 2020 - present",
        (
            <ul>
                <li>
                    reducing the server load by hundreds of calls to the
                    Postgres database through implementing JWT token issuing and
                    validation.
                </li>
                <li>
                    migrating the server code from SQLAlchemy and Python to
                    GraphQL and Typescript to simplify data requests.
                </li>
                <li>
                    collaborating with a team of 5 to manage the workshops that
                    will run for 1000+ attendees
                </li>
            </ul>
        ),
        [
            "Student Org",
            "Python",
            "SQL",
            "sqlalchemy",
            "PostgreSQL",
            "Tornado",
            "graphql",
            "typescript",
        ],
        "#183249",
        "https://hackthenorth.com/",
        false
    ),
    new ExperienceSpec(
        blueprint_logo,
        "blueprint",
        "project developer • sep 2018 - dec 2019",
        (
            <ul>
                <li>
                    developed an Android app in Kotlin to digitize the judging
                    process for 500+ participants at an annual Ontario dance
                    festival.
                </li>
                <li>
                    researched and prototyped an object detection machine
                    learning pipeline to detect micro-plastics in liquids using
                    OpenCV, LabelBox.
                </li>
            </ul>
        ),
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
            "dancefest",
            "android app",
            "An adjudication app in Kotlin to digitize the judging process for 500+ participants at an annual Ontario Secondary School dance festival.",
            ["UW Blueprint", "Android", "Kotlin", "Firebase"],
            "#e15046",
            "https://uwblueprint.org/",
            true
        ),
        new ExperienceSpec(
            image_repo,
            "mnemosyne",
            "web app",
            "A web app that securely stores and displays images from s3 using pre-signed CloudFront urls.",
            ["Flask", "SQLAlchemy", "PostgreSQL", "s3", "CloudFront", "heroku"],
            "#99cbcb",
            "",
            true
        ),
    ],
    [
        new ExperienceSpec(
            cc3k,
            "chamber crawler",
            "c++ project",
            "A command line dungeon crawl role playing game created in C++, utilizing OOP design patterns.",
            ["C++", "mvc"],
            "#292929",
            "https://uwblueprint.org/",
            true
        ),
        new ExperienceSpec(
            mimelons,
            "mi melons",
            "iOS + Voiceflow app",
            "An app that guides women through their monthly breast exam to check for lumps and irregularities. Users are able to track their past exams and symptoms.",
            ["Hack the North 2019", "iOS", "Swift", "ResNet50", "VoiceFlow"],
            "#b4c67c",
            "https://uwblueprint.org/",
            true
        ),
    ],
    [
        new ExperienceSpec(
            website,
            "personal website",
            "this website!",
            "Designed in Figma, developed in React.",
            ["React", "JavaScript", "HTML", "CSS"],
            "#f7adae",
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
        "redefining how users interact with e-commerce",
        [],
        "#2fb7ec",
        false
    ),
    new ExperienceSpec(
        htn_logo,
        "",
        "",
        "building Canada’s biggest hackathon",
        [],
        "#183249",
        "",
        false
    ),
    new ExperienceSpec(
        wattpad_logo,
        "",
        "",
        "introducing new ways for readers to support their favourite authors",
        [],
        "#EC6333",
        "",
        false
    ),
    new ExperienceSpec(
        blueprint_logo,
        "",
        "",
        "leveraging technology to empower non profit organizations",
        [],
        "#1078E9",
        "",
        false
    ),
    new ExperienceSpec(
        td_logo,
        "",
        "",
        "utilizing bank data to power the tools of tomorrow",
        [],
        "#35B234",
        "",
        false
    ),
];
