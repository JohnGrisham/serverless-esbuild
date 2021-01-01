import validateIsin from 'isin-validator';

export async function handler(event: string) {
  const isInvalid = validateIsin(event);
  console.log('modified');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: isInvalid ? 'ISIN is invalid!' : 'ISIN is fine!',
      input: event,
    }),
  };
}
