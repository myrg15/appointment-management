export const validation = (value:string, length:number) =>{
    if (!(value && value.length >0 && value.length <= length)){
       console.log ( value ,"invalid format, the size should be smaller:", length);
       return false;
       
    }else {console.log("validated", value)}
    return true;
 }