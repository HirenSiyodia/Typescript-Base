
interface logProps {
    status : 'Info' | 'Warn' | 'Error' // Writing this instead of 'String' Because so it wont give any other answer and error will show here directly
}

const LogLevel = (props: logProps) => {
    let status;

    if (props.status === 'Info') {
        status = 'Status Info';
    } else if (props.status === 'Warn') {
        status = 'Warn'
    } else if (props.status === 'Error') {
        status = 'Error'
    }


  return (
    <div>
      {status}
    </div>
  )
}

export default LogLevel
