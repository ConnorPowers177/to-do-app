export type iLoginProps = {
    onUserLogin: (userId: string) => any
}


export function Login({onUserLogin}: iLoginProps){
    const handleSubmit = (e: any) => {
        e.preventDefault()
        onUserLogin(e.target.userId.value)
    }

    return (
        <form onSubmit={handleSubmit}>
          <input type='text' name='userId'/>
          <button type='submit'>Login</button>
      </form>
    )
}