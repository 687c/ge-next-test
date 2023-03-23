export function getOfficialSite(sitesArr: any[]) {
    let officialUrl = sitesArr.find(linkUrl => linkUrl.type == "INFO")

    return officialUrl.url;
}
