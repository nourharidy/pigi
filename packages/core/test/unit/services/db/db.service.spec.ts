import '../../../setup'

/* Internal Imports */
import { DBService } from '../../../../src/services'
import { config } from '../../../mock'

describe('DBService', () => {
  const dbservice = new DBService(config)

  it('should open a DB', async () => {
    const expected = 'dbname'
    await dbservice.open({ namespace: expected })
    dbservice.dbs[expected].should.exist
  })

  it('should open two DBs', async () => {
    const db1Name = 'db1'
    const db2Name = 'db2'
    await dbservice.open({ namespace: db1Name })
    await dbservice.open({ namespace: db2Name })
    const db1 = dbservice.dbs[db1Name]
    const db2 = dbservice.dbs[db2Name]

    db1.should.exist
    db2.should.exist
    db1.should.not.deep.equal(db2)
  })
})
