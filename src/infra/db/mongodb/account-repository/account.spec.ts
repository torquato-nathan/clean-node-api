import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account-repository'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const accountsCollection = await MongoHelper.getCollection('accounts')
    await accountsCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  function makeSut (): AccountMongoRepository {
    return new AccountMongoRepository()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'valid_name',
      email: 'valid@email.com',
      password: 'hashed_password',
    })
    expect(account).toBeDefined()
    expect(account.id).toBeDefined()
    expect(account.name).toBe('valid_name')
    expect(account.email).toBe('valid@email.com')
    expect(account.password).toBe('hashed_password')
  })
})
