// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import supertest from 'supertest'
import 'jest-extended';
import app from '../../src/app';

const request = supertest(app);

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  beforeAll( async () => {
    // Creer 2 joueurs
    const joueur1 = await request.get('/api/v1/jeu/demarrerJeu?nom=Jean-Marc');
    const joueur2 = await request.get('/api/v1/jeu/demarrerJeu?nom=Pierre');
  });

  it('devrait redémarrer le jeu avec succes', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  //TO CHECK
  it('devrait avoir aucun joueur', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.body.joueurs.size).toBe(0);
  });
});