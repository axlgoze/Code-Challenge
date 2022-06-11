const MissionExplorer = require("./../app/missionExplorer");
describe("Esto es una suite de pruebas",()=>{
	test('Caso de prueba 1', ()=>{
		const result = 1+2
		expect(result).toBe(3);
	});
	test('2) Crear un objeto de mission explorer', ()=>{
		const  myMissionExplorer = new MissionExplorer("Fromm");
		expect(myMissionExplorer.name).toBe("Fromm");
	});
	test('3) lee nombre de objeto de mission explorer', ()=>{
		const  myMissionExplorer = new MissionExplorer("Gerardo");
		expect(myMissionExplorer.name).toBeDefined();
	});

})
