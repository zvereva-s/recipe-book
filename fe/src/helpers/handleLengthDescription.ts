export const handleLengthDescription = (description:string, size:number=150):string=>{
    return description.slice(0, size)+'...';
}