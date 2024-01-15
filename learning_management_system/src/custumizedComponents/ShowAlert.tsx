import { Alert } from "@mui/material"

interface Props{
    varient?:any;
    severity?:any;
    msg?:any;
}

const ShowAlert:React.FC<Props> = ({varient,severity,msg})=>{
  return <Alert variant={varient} severity={severity}>
  {msg}
</Alert>
}

export default ShowAlert