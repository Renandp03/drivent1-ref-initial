
export function cepNotFound(status:number): {name:string,status:number,message:string} {
  return {
    name: 'NotFoundError',
    status,
    message:"No address for this cep, check if cep is spelled correctly."
  };
}
