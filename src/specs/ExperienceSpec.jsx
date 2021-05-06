import React from "react";
import wish_logo from "../assets/work/wish_logo.png";
import htn_logo from "../assets/work/htn_logo.png";
import wattpad_logo from "../assets/work/wattpad_logo.png";
import blueprint_logo from "../assets/work/blueprint_logo.png";
import td_logo from "../assets/work/td_logo.png";
import shopify_logo from "../assets/work/shopify_logo.png";
import cc3k from "../assets/work/cc3k_product.png";
import mimelons from "../assets/work/mimelons_product.png";
import dancefest from "../assets/work/dancefest_product_transparent.png";
import website from "../assets/work/website.png";
import image_repo from "../assets/work/image_repo.png";
import htn_discord from "../assets/work/htn_discord.png";

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
           shopify_logo,
           "shopify",
           "backend developer intern • sep - dec 2020",
           (
            <div>
                As part of the self-shipping team at Shopify, I was responsible for
                increasing merchant productivity in their shipping workflows.{" "}
                <div className="extra-work-info">
                    Some highlights of my work include:
                    <ul>
                        <li>
                            developed features for Shipping Manifests, a web app that
                            allows merchants to group multiple shipping labels into one
                            scannable form, resulting in an 87% merchant adoption rate in beta
                        </li>
                        <li>
                            led the development of merchant feedback user flows for
                            the Shipping Manifests app using React and Redux
                        </li>
                        <li>
                            improved store performance troubleshooting by prototyping
                            a chrome extension that tracks version control between store
                            theme changes and displays a user interface that compares
                            different versions
                        </li>
                    </ul>
                </div>
            </div>
        ),
           ["Ruby on Rails", "GraphQL", "TypeSript", "React", "Redux"],
           "#95BF47",
           "https://www.shopify.com",
           false
       ),
    new ExperienceSpec(
        wish_logo,
        "wish",
        "software engineer intern • jan - apr 2020",
        (
            <div>
                As part of the product team at Wish, I was responsible for
                creating full stack features for the iOS application.{" "}
                <div className="extra-work-info">
                    Some highlights of my work include:
                    <ul>
                        <li>
                            building the backend architecture, product
                            selection/push notification infrastructure, and
                            custom pricing logic for Flash Sale, a feature that
                            showcases 100+ products on sale every 4 hours daily,
                            resulting in a 4.91% increase in GMV
                        </li>
                        <li>
                            implementing redesigns of the current iOS UI,
                            resulting in a $32M increase on gross merchandise
                            value per year
                        </li>
                        <li>
                            blocking over 160k fraud accounts per month by
                            modifying the iOS app’s core requests to integrate
                            an internal multi-factor authentication framework
                        </li>
                        <li>
                            reducing day 0 drop-off for new users by 12% and
                            increasing a user's lifetime value by 5%, through
                            building new onboarding experiences
                        </li>
                    </ul>
                </div>
            </div>
        ),
        ["Python", "Tornado", "MongoDB", "mongoengine", "sql", "iOS", "Swift"],
        "#2fb7ec",
        "http://www.wish.com",
        false
    ),
    new ExperienceSpec(
        wattpad_logo,
        "wattpad",
        "software engineer intern • may - aug 2019",
        (
            <div>
                As part of the "money squad" or monetization team, I ideated new
                ways for readers to support their favorite authors on the
                platform.{" "}
                <div className="extra-work-info">
                    Some highlights of my work include:
                    <ul>
                        <li>
                            increasing weekly paying users by 15% through
                            integrating Mopub rewarded video ads into the iOS
                            platform
                        </li>
                        <li>
                            piloting a coin gifting experiment to 50% of US iOS
                            users, resulting in an estimated $10k increase in
                            monthly revenue
                        </li>
                        <li>
                            automating tests for purchasing coins using XCUITest
                            to increase code coverage on the iOS app
                        </li>
                    </ul>
                </div>
            </div>
        ),
        ["iOS", "Python", "Swift", "Objective C"],
        "#EC6333",
        "http://www.wattpad.com",
        false
    ),
    new ExperienceSpec(
        td_logo,
        "td lab",
        "software developer intern • sep - dec 2018",
        (
            <div>
                At TD Lab, I worked on rapidly ideating and building minimum
                viable products to solve pain points at TD enterprise.{" "}
                <div className="extra-work-info">
                    Some highlights of my work include:
                    <ul>
                        <li>
                            improving component positions of a YOLOv2 machine
                            learning app that converts paper wireframes into
                            interactive user interfaces by adding symmetry
                            detection logic
                        </li>
                        <li>
                            prototyping a real-time iOS chat app using
                            Firestore, chosen as best solution during Hack Week
                        </li>
                        <li>
                            pitching functional prototypes to TD Innovation EVPs
                            for commercialization
                        </li>
                    </ul>
                </div>
            </div>
        ),
        ["iOS", "Python", "Swift", "YOLOv3", "Firebase", "HTML/CSS"],
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
            <div>
                As an organizer on the Hack the North team, I help maintain the
                Hack the North server code and database. Non-tech wise, I am
                contributing to the vision of Hack the North 2020++.{" "}
                <div className="extra-work-info">
                    Some things I have contributed to include:
                    <ul>
                        <li>
                            reducing the server load by hundreds of calls to the
                            Postgres database through implementing JWT token
                            issuing and validation
                        </li>
                        <li>
                            migrating the server code from SQLAlchemy and Python
                            to GraphQL and Typescript to simplify data requests
                        </li>
                        <li>
                            collaborating with a team of 5 to manage the
                            workshops that will run for 1000+ attendees
                        </li>
                    </ul>
                </div>
            </div>
        ),
        [
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
            <div>
                As a project developer on UW Blueprint, I worked on building
                technology to solve problems brought to us by non-profits.{" "}
                <div className="extra-work-info">
                    Some projects I worked on include:
                    <ul>
                        <li>
                            developing an Android app in Kotlin to digitize the
                            judging process for 500+ participants at an annual
                            Ontario dance festival.
                        </li>
                        <li>
                            researching and prototyping an object detection
                            machine learning pipeline to detect micro-plastics
                            in liquids using OpenCV, LabelBox.
                        </li>
                    </ul>
                </div>
            </div>
        ),
        ["Android", "Kotlin", "Python", "React"],
        "#1078E9",
        "https://uwblueprint.org/",
        false
    ),
];

export const ProjectData = [
    [
        new ExperienceSpec(
            htn_discord,
            "hack the north bot",
            "discord bot",
            "A Discord bot that automates registration, mentorship, sponsor <> hacker chats, and judging processes for Hack the North 2020++.",
            ["Discord.js", "TypeScript", "GraphQL"],
            "#183249",
            "https://hackthenorth.com/",
            true
        ),
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
    ],
    [
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
        new ExperienceSpec(
            cc3k,
            "chamber crawler",
            "c++ project",
            "A command line dungeon crawl role playing game created in C++, utilizing OOP design patterns.",
            ["C++", "mvc"],
            "#292929",
            "",
            true
        ),
    ],
    [
        new ExperienceSpec(
            mimelons,
            "mi melons",
            "iOS + Voiceflow app",
            "An app that guides women through their monthly breast exam to check for lumps and irregularities. Users are able to track their past exams and symptoms.",
            ["Hack the North 2019", "iOS", "Swift", "ResNet50", "VoiceFlow"],
            "#b4c67c",
            "",
            true
        ),
        new ExperienceSpec(
            website,
            "personal website",
            "this website!",
            "Designed in Figma, developed in React.",
            ["React", "JavaScript", "HTML", "CSS"],
            "#f7adae",
            "",
            true
        ),
    ],
];

export const PreviewData = [
    new ExperienceSpec(
        shopify_logo,
        "",
        "",
        "improving the self-shipping workflow for merchants",
        [],
        "#95BF47",
        false
    ),
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
