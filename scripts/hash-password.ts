import bcrypt from 'bcryptjs'

async function hashPassword() {
  const password = process.argv[2]
  if (!password) {
    console.log('Usage: npx tsx scripts/hash-password.ts <password>')
    process.exit(1)
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  console.log('\n================================================')
  console.log('PASSWORD HASH GENERATED')
  console.log('================================================\n')
  console.log('Password:', password)
  console.log('Hash:', hash)
  console.log('\nCopy the hash above into your .env file as ADMIN_LOGIN_PASSWORD_HASH\n')
}

hashPassword().catch(console.error)
