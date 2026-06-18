exports.handler = async () => {
  const response = await fetch(
    'https://api.squarespace.com/1.0/commerce/orders?fulfillmentStatus=FULFILLED',
    {
      headers: {
        'Authorization': `Bearer ${process.env.SQUARESPACE_API_KEY}`,
        'User-Agent': 'casey-sales-counter'
      }
    }
  );

  const data = await response.json();
  const count = data.result ? data.result.length : 0;

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ count })
  };
};
