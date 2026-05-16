

const secret = process.env.NEXT_PUBLIC_API_SECRET_KEY

console.log('secret is '+secret)

function SecretTest() {
  return (
    <div>
      secrets test
    </div>
  )
}

export default SecretTest
