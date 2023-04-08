
export function cepNotFound(): {name:string,status:Number,message:string} {
  return {
    name: 'NotFoundError',
    status: 204,
    message:"No address for this cep, check if cep is spelled correctly."
  };
}
