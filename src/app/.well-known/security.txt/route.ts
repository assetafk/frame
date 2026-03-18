export const runtime = "nodejs";

export async function GET() {
  const body = [
    "Contact: mailto:security@example.com",
    "Expires: 2030-01-01T00:00:00.000Z",
    "Preferred-Languages: en, ru",
    "Canonical: /.well-known/security.txt"
  ].join("\n");

  return new Response(body + "\n", {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400"
    }
  });
}

