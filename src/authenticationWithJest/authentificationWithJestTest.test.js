

 const {loginUser,isValidetEmail,isValidetPassword,calculeNbStart} = require('./authentificationWithJestTest')



 describe('utlis test',()=>{



  it('login password ok', () => {
    const email='t1@t1.com'
    const password='admin'
    const res=loginUser(email,password)
    expect(res).toBeTruthy();
  });

  it('login password ko', () => {
    const email='t1.com'
    const password='admin'
    expect(()=>{
        loginUser(email,password)
    }
      ).toThrow('failed login')
  });

  it('email test ok', () => {
    const email='ssss@bar.com'

    expect(()=> isValidetEmail(email)).toBeTruthy()
  });
  it('email test ko', () => {
    const email='bar.com'

    expect(isValidetEmail(email)).toBeFalsy()
  });
  it('password test ok', () => {
    const password='mlddldlQAx?234567'

    expect(isValidetPassword(password)).toBeTruthy()
  });
  it('password test ko', () => {
    const password='mldd'

    expect(isValidetPassword(password)).toBeFalsy()
  });

  test('calcule start ko', () => {
    const iduser=1234

    expect(calculeNbStart(iduser)).toBe(5)
  });

})
