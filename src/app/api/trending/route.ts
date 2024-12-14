import fetchTrendingGifs from "@/src/utils/fetchTrendingGifs";

export async function GET(request: Request) {
  const url = new URL(request.url);

  try {
    const offset = parseInt(url.searchParams.get("offset") ?? "0", 10);

    const response = await fetchTrendingGifs(offset);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Parameter offset is required to be a positive integer.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
