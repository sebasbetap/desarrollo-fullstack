// Implementación de Unit Test con Jest pendiente de adecuar a Express y Node.js
import { TestScheduler } from 'jest';
import controller from '../api/components/user/controller';

const expect = global.expect;

describe('controller', () => {
    const variosUsers = [{
        id: '123',
        username: 'luisa123LUISA',
        name: 'Luisa',
    }, {
        id: 'zN4K9N69xGxHgNNuQieTO',
        username: 'sebasbetap',
        name: 'Juan Sebastian Betancur'
    }];

    describe('leer', () => {
        beforeEach(() => {
            controller.list();
        });

        test('Debe arrojar usuarios con datos {id, username, name}', () => {
            const contact = variosUsers[0];
            network.list(contact);

            const actual = controller.list();
            const esperado = [contact];

            expect(actual).toEqual(esperado);
        });
    });
});