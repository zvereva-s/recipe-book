
function buildUrlWithParams(
    url: string,
    pathParams: { [key: string]: string } = {}
) {
    let finalUrl = url;
    const queryParams: string[] = [];

    for (const key in pathParams) {
        if (finalUrl.includes(`:${key}`)) {

            finalUrl = finalUrl.replace(`:${key}`, pathParams[key]);
        } else {

            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(pathParams[key])}`);
        }
    }

    if (queryParams.length > 0) {
        finalUrl += `?${queryParams.join("&")}`;
    }

    return finalUrl;
}

class CoreAPI {
    private readonly baseURL: string;

    constructor(baseURL:string){
        this.baseURL = baseURL
    }

    async GET({url,pathParams = {}}:{url:string,pathParams?:{[key:string]:string}}){
            try{
                const finalUrl = buildUrlWithParams(url, pathParams);
                const response = await fetch(`${this.baseURL}${finalUrl}`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                return await response.json();
            }
            catch (e: unknown) {
                if (e instanceof Error) {
                    return { error: e.message };
                }
                return { error: "Unknown error" };
            }
    }
}

export const API = new CoreAPI(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000');