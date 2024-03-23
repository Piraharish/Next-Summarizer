"use server";

export const fetchSummarizedData = async (url: string, length: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiHost = process.env.NEXT_PUBLIC_API_HOST;
  const apiUrl = `${baseUrl}?url=${encodeURIComponent(url)}&length=${
    length || 4
  }`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey || "",
      "X-RapidAPI-Host": apiHost || "",
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) return { error: "Failed to fetch summary!" };

    if (response.status === 503)
      return { error: "Service Temporarily Unavailable" };

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    return { error: "An error occurred while fetching!" };
  }
};
