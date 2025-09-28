import GUID from "./GUID";

export default interface Project {
    id: GUID;
    tags: string[];
    tools: string[];
    name: string;
    shortDescription: string;
    fullDescription: string;

    thumbnailImageURL?: string;
    imageURL?: string;

    githubName?: string;
    githubURL?: string;

    youtubeName?: string;
    youtubeURL?: string;

    websiteName?: string;
    websiteURL?: string;
}