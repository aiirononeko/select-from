export const loader = () => {
  const robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/

    User-agent: *
    Allow: /

    Sitemap: https://www.select-from.com/sitemap.xml
    `

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
