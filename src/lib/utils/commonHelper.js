export const  getUrllastSegment=()=>{
    let pageUrl=window.location.href;
    let lastURLSegment = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    return lastURLSegment;
}