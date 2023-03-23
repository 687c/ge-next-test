// "use client"

import { PAGINATED_ANIME_QUERY } from "@/lib/queries";
import { getClient } from "@/lib/client";

import ClientView from "./ClientView";

// async component in Next allowing us to await the results of 
// data fetching inside our component
export default async function About() {
    // const [page, setPage] = useState<number>(1);

    const client = getClient();
    // const { data: { Media } } = await client.query({ query: ANIME_QUERY });

    // const { data: { Media: { externalLinks } } } = await client.query({ query: ANIME_QUERY, variables: { page: 1 } });

    const variables = { page: 1 }

    const { data } = await client.query({ query: PAGINATED_ANIME_QUERY, variables });

    return (
        <div style={{ height: "100vh" }}>
            <ClientView media={data.Page.media} />
        </div>
    )
}
