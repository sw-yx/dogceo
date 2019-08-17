const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET"
}

exports.handler = async (event, context) => {
  try {
    const count = Number(event.queryStringParameters.count) || 1
    // console.log({ count })
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(
        [
          "https://images.dog.ceo/breeds/shiba/shiba-1.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-10.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-13.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-3i.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
          "https://images.dog.ceo/breeds/shiba/shiba-7.JPG",
          "https://images.dog.ceo/breeds/shiba/shiba-8.JPG",
          "https://images.dog.ceo/breeds/shiba/shiba-9.jpg"
        ].slice(-1 * count)
      )
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
