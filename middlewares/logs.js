function userCredentials(req,res,next){
    console.clear()
    console.log("I am from middlewares")
    console.log("username :(mr792)")
    console.log("email :(mr792@mr.com)")
    console.log("age :(21)")
    next()
}

export default userCredentials;