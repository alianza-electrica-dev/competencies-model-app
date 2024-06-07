<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('questions')->insert([
            // ? test 1
            [
                'id' => 1,
                'question_text' => 'Entiende la importancia que tiene la satisfacción de los consumidores para el éxito del grupo. Comprende y puede explicar como impacta su propio trabajo a los consumidores.',
                'test_id' => 1
            ],
            [
                'id' => 2,
                'question_text' => 'Busca información de manera activa a fin de entender las expectativas y necesidades de los clientes y/o consumidores.',
                'test_id' => 1
            ],
            [
                'id' => 3,
                'question_text' => 'Adapta los productos y servicios de acuerdo con la retroalimentación del cliente y/o consumidor.',
                'test_id' => 1
            ],
            [
                'id' => 4,
                'question_text' => 'Identifica y corrige las fallas en los procesos y sistemas internos que impactan directamente al cliente y/o consumidor.',
                'test_id' => 1
            ],
            [
                'id' => 5,
                'question_text' => 'Evalúa la satisfacción de su cliente y/o consumidor y toma acciones correctivas para mejorarla.',
                'test_id' => 1
            ],

            // ? test 2
            [
                'id' => 6,
                'question_text' => 'Establece estándares altos de desempeño, cumple con los objetivos establecidos y busca la manera de superarlos.',
                'test_id' => 2
            ],
            [
                'id' => 7,
                'question_text' => 'Trabaja con tenacidad y respeto a los demás buscando maneras eficaces para lograr los resultados esperados.',
                'test_id' => 2
            ],
            [
                'id' => 8,
                'question_text' => 'Reconoce cuando el progreso hacia los resultados se está desacelerando y toma medidas inmediatas para resolverlo. Es responsable de los resultados.',
                'test_id' => 2
            ],
            [
                'id' => 9,
                'question_text' => 'Identifica problemas evaluando las causas, proponiendo alternativas de solución viables y tomando decisiones oportunamente.',
                'test_id' => 2
            ],
            [
                'id' => 10,
                'question_text' => 'Permanece abierto a nuevos conceptos de trabajo y se adapta ante situaciones de cambio e incertidumbre cuando es necesario.',
                'test_id' => 2
            ],

            // ? test 3
            [
                'id' => 11,
                'question_text' => 'Trabaja con otros con una actitud positiva y colaborativa orientado a procesos de negocio.',
                'test_id' => 3
            ],
            [
                'id' => 12,
                'question_text' => 'Establece buenas relaciones interpersonales, sin importar niveles jerárquicos, ayudando a que la gente se sienta valorada, apreciada e incluida.',
                'test_id' => 3
            ],
            [
                'id' => 13,
                'question_text' => 'Escucha a los demás, muestra empatía y brinda apoyo proactivamente.',
                'test_id' => 3
            ],
            [
                'id' => 14,
                'question_text' => 'Entiende la importancia de los objetivos de la organización y contribuye con los demás para alcanzarlos.',
                'test_id' => 3
            ],

            // ? test 4
            [
                'id' => 15,
                'question_text' => 'Identifica y entiende el objetivo planteado, así como las interdependencias de las diferentes áreas involucradas en el proyecto.',
                'test_id' => 4
            ],
            [
                'id' => 16,
                'question_text' => 'Analiza los requerimientos del proyecto y determina qué tareas se deben realizar, así como los recursos y personal necesario para ejecutarlo de manera exitosa.',
                'test_id' => 4
            ],
            [
                'id' => 17,
                'question_text' => 'Establece planes de acción efectivos definiendo responsables y fechas de cumplimiento; se asegura que el equipo comprende el proyecto y lo ejecuta conforme a lo planeado.',
                'test_id' => 4
            ],
            [
                'id' => 18,
                'question_text' => 'Mantiene informado al equipo sobre los avances del proyecto y ayuda a eliminar obstáculos que interfieren en su ejecución.',
                'test_id' => 4
            ],
            [
                'id' => 19,
                'question_text' => 'Desarrolla sistemas y métricas que monitorean el avance del proyecto y aseguran la calidad y éxito del mismo.',
                'test_id' => 4
            ],

            // ? Test 5
            [
                'id' => 20,
                'question_text' => 'Tiene una forma estructurada y sistemática para solucionar problemas considerando todos los elementos disponibles, con el fin de emitir la mejor recomendación posible.',
                'test_id' => 5
            ],
            [
                'id' => 21,
                'question_text' => 'Utiliza su conocimiento para anticipar tendencias, acciones o circunstancias que pudieran afectar o poner en riesgo al grupo.',
                'test_id' => 5
            ],
            [
                'id' => 22,
                'question_text' => 'Capitaliza el conocimiento funcional buscando aprovechar esta información para un mejor logro de los resultados del grupo.',
                'test_id' => 5
            ],
            [
                'id' => 23,
                'question_text' => 'Es capaz de brindar asesoría profesional a diferentes áreas del negocio y localidades.',
                'test_id' => 5
            ],

            // ? Test 6
            [
                'id' => 24,
                'question_text' => 'Conoce y puede explicar a otros las políticas y procedimientos financieros del grupo.',
                'test_id' => 6
            ],
            [
                'id' => 25,
                'question_text' => 'Refuerza y asegura el cumplimiento de los requerimientos regulatorios en todas las áreas.',
                'test_id' => 6
            ],
            [
                'id' => 26,
                'question_text' => 'Comunica a toda la organización las políticas y procedimientos financieros y promueve su cumplimiento.',
                'test_id' => 6
            ],
            [
                'id' => 27,
                'question_text' => 'Diseña y participa en la implementación de programas y políticas de control interno cuando es requerido.',
                'test_id' => 6
            ],

            // ? test 7
            [
                'id' => 28,
                'question_text' => 'Comprende el mercado e industria en los que opera la organización; conoce y puede explicar las tendencias, clientes, competencia y participación de mercado.',
                'test_id' => 7
            ],
            [
                'id' => 29,
                'question_text' => 'Utiliza la información y comprensión del mercado, la industria y el propio negocio para proponer acciones que mejoren los resultados del negocio.',
                'test_id' => 7
            ],
            [
                'id' => 30,
                'question_text' => 'Conoce y puede explicar a otros los objetivos estratégicos del grupo y de su área.',
                'test_id' => 7
            ],
            [
                'id' => 31,
                'question_text' => 'Se interesa por conocer iniciativas o proyectos realizados en otras áreas para ampliar su conocimiento de la compañía.',
                'test_id' => 7
            ],

            // ? Test 8
            [
                'id' => 32,
                'question_text' => 'Se mantiene actualizado acerca de las tendencias económicas, sociales y políticas que pueden afectar al grupo en el corto, mediano y largo plazo.',
                'test_id' => 8
            ],
            [
                'id' => 33,
                'question_text' => 'Identifica amenazas y oportunidades externas a nivel mundial y propone cursos de acción para mejorar los resultados de negocio en el corto, mediano y largo plazo.',
                'test_id' => 8
            ],
            [
                'id' => 34,
                'question_text' => 'Conoce y aprovecha la infraestructura del grupo FG para eficientar los procesos de negocio y maximizar los resultados.',
                'test_id' => 8
            ],

            // ? Test 9
            [
                'id' => 35,
                'question_text' => 'Brinda apoyo y asesoría a los clientes, ayudándolos a que evalúen diferentes alternativas de solución.',
                'test_id' => 9
            ],
            [
                'id' => 36,
                'question_text' => 'Es sensible a las necesidades del negocio y de los clientes, recomendando planes de acción dentro de su área de dominio.',
                'test_id' => 9
            ],
            [
                'id' => 37,
                'question_text' => 'Se anticipa a posibles problemas del negocio o de los clientes, sugiriendo cursos de acción para evitarlos.',
                'test_id' => 9
            ],
            [
                'id' => 38,
                'question_text' => 'Se gana la confianza de los clientes al ser efectivo en la solución de problemas con base en sus recomendaciones.',
                'test_id' => 9
            ],
            [
                'id' => 39,
                'question_text' => 'Actúa como mediador entre grupos de trabajo, asegurando que las discusiones lleguen a puntos de acuerdo en beneficio de la compañía.',
                'test_id' => 9
            ],

            // ? Test 10
            [
                'id' => 40,
                'question_text' => 'Busca obtener información adicional con respecto a las ventas, clientes y/o consumidores para poder agregar valor en la operación de ventas.',
                'test_id' => 10
            ],
            [
                'id' => 41,
                'question_text' => 'Examina los datos cualitativos y cuantitativos de ventas para identificar los problemas críticos de negocio que impactan la operación de ventas.',
                'test_id' => 10
            ],
            [
                'id' => 42,
                'question_text' => 'Minimiza y/o elimina las actividades que entorpecen las operaciones de venta; sugiere cambios a los procesos de venta cuando es necesario.',
                'test_id' => 10
            ],
            [
                'id' => 43,
                'question_text' => 'Es proactivo y busca anticipar las necesidades de nuestros clientes y/o consumidores para satisfacer de mejor manera la demanda.',
                'test_id' => 10
            ],

            // ? Test 11
            [
                'id' => 44,
                'question_text' => 'Identifica los requerimientos de talento necesarios para la organización; evalúa las fortalezas y las brechas de talento en la estructura actual y futura.',
                'test_id' => 11
            ],
            [
                'id' => 45,
                'question_text' => 'Promueve con sus clientes un enfoque de atracción de talento interno y/o externo, alineado con resultados y competencias del grupo.',
                'test_id' => 11
            ],
            [
                'id' => 46,
                'question_text' => 'Fomenta una cultura de aprendizaje y desarrollo en la cual la responsabilidad es compartida: los empleados son proactivos en su propio plan, los gerentes guían a los empleados y Recursos Humanos facilita el proceso.',
                'test_id' => 11
            ],
            [
                'id' => 47,
                'question_text' => 'Asegura que sus clientes adoptan un sistema de administración de desempeño en el que los resultados alcanzados y las competencias son considerados en la evaluación.',
                'test_id' => 11
            ],
            [
                'id' => 48,
                'question_text' => 'Analiza y utiliza los resultados de la encuesta de clima organizacional para identificar fortalezas y oportunidades; colabora con sus clientes para establecer planes de mejora.',
                'test_id' => 11
            ],

            // ? Test 12
            [
                'id' => 49,
                'question_text' => 'Identifica posibles factores que afectan la eficiencia de los procesos o calidad de nuestros productos y servicios.',
                'test_id' => 12
            ],
            [
                'id' => 50,
                'question_text' => 'Propone e implementa soluciones de mejora considerando las variables internas y externas; monitorea los avances; modifica las soluciones según es requerido.',
                'test_id' => 12
            ],
            [
                'id' => 51,
                'question_text' => 'Provoca discusiones constructivas y respetuosas para generar ideas de mejora de procesos, productos y servicios.',
                'test_id' => 12
            ],

            // ? Test 13
            [
                'id' => 52,
                'question_text' => 'Ejecuta de manera precisa cada una de las fases de un proceso, cumpliendo con los lineamientos establecidos. Se asegura de evitar errores, omisiones y defectos.',
                'test_id' => 13
            ],
            [
                'id' => 53,
                'question_text' => 'Conoce y monitorea los indicadores de calidad y se asegura de su cumplimiento.',
                'test_id' => 13
            ],
            [
                'id' => 54,
                'question_text' => 'Utiliza la retroalimentación interna y/o externa para mejorar la calidad de los productos y servicios.',
                'test_id' => 13
            ],
            [
                'id' => 55,
                'question_text' => 'Toma la iniciativa para identificar y corregir problemas de calidad. Cuando es requerido, informa a otros los problemas identificados.',
                'test_id' => 13
            ],

            // ? Test 14
            [
                'id' => 56,
                'question_text' => 'Monitorea la información del mercado y muestra comprensión de las variables clave, incluyendo las tendencias en mercados emergentes.',
                'test_id' => 14
            ],
            [
                'id' => 57,
                'question_text' => 'Evalúa de manera integral todos los elementos necesarios (factibilidad, sustentabilidad, rentabilidad) para identificar las oportunidades de crecimiento que representen mayor valor para el negocio.',
                'test_id' => 14
            ],
            [
                'id' => 58,
                'question_text' => 'Elabora esquemas innovadores para ofrecer una mayor ventaja competitiva y valor de marca con clientes y/o consumidores potenciales a nivel global.',
                'test_id' => 14
            ],
            [
                'id' => 59,
                'question_text' => 'Toma riesgos y presenta ideas de nuevas oportunidades de negocio.',
                'test_id' => 14
            ],

            // ? Test 15
            [
                'id' => 60,
                'question_text' => 'Construye o redefine las estrategias de mercadotecnia para potencializar las oportunidades de negocio.',
                'test_id' => 15
            ],
            [
                'id' => 61,
                'question_text' => 'Diseña y establece planes de mercadotecnia que incluyen una propuesta de valor como un elemento clave y que dan como resultado un mejor posicionamiento de nuestras marcas.',
                'test_id' => 15
            ],
            [
                'id' => 62,
                'question_text' => 'Recomienda estrategias de marca y/o producto utilizando el conocimiento y entendimiento del mercado para lograr una mayor ventaja competitiva.',
                'test_id' => 15
            ],
            [
                'id' => 63,
                'question_text' => 'Comparte con otras áreas de la empresa, el conocimiento del mercado, clientes y/o consumidores para tomar mejores decisiones de negocio.',
                'test_id' => 15
            ],

            // ? Test 16
            [
                'id' => 64,
                'question_text' => 'Identifica e implementa de manera efectiva y oportuna, mejoras en los procesos y sistemas financieros.',
                'test_id' => 16
            ],
            [
                'id' => 65,
                'question_text' => 'Colabora en proyectos con otras áreas, evaluando las variables financieras y proyección de resultados cuando es requerido.',
                'test_id' => 16
            ],
            [
                'id' => 66,
                'question_text' => 'Se asegura que las áreas de negocio cuentan con información financiera confiable y actualizada para la toma oportuna de decisiones.',
                'test_id' => 16
            ],

            // ? Test 17
            [
                'id' => 67,
                'question_text' => 'Comprende los procesos de manufactura, productos y servicios de FG; puede explicar a otros las ventajas competitivas de los mismos.',
                'test_id' => 17
            ],
            [
                'id' => 68,
                'question_text' => 'Demuestra un entendimiento de los principales competidores de FG, destacando las ventajas competitivas de sus productos y servicios.',
                'test_id' => 17
            ],
            [
                'id' => 69,
                'question_text' => 'Busca proactivamente nuevos desafíos técnicos en su área, con el propósito de incrementar el conocimiento técnico. Comparte sus conocimientos con otros.',
                'test_id' => 17
            ],
            [
                'id' => 70,
                'question_text' => 'Identifica oportunidades de mejora en nuestros productos y servicios; asegura que las oportunidades son conocidas por otros y colabora en la implementación de planes de mejora.',
                'test_id' => 17
            ],
            [
                'id' => 71,
                'question_text' => 'Asesora a clientes y/o consumidores sobre detalles técnicos cuando es requerido, con el fin de asegurar el correcto funcionamiento de los productos y lograr su satisfacción.',
                'test_id' => 17
            ],


            // ? Test 18
            [
                'id' => 72,
                'question_text' => 'Establece estrategias para construir relaciones sólidas y de largo plazo con los clientes y/o consumidores.',
                'test_id' => 18
            ],
            [
                'id' => 73,
                'question_text' => 'Colabora con otras áreas para dar respuesta a los clientes y/o consumidores de manera clara y oportuna, manteniendo un sentido de urgencia para cubrir sus expectativas.',
                'test_id' => 18
            ],
            [
                'id' => 74,
                'question_text' => 'Escucha “la voz” del cliente y/o consumidor para sensibilizarse de sus necesidades y expectativas y buscar soluciones para resolverlas.',
                'test_id' => 18
            ],
            [
                'id' => 75,
                'question_text' => 'Utiliza mecanismos externos para obtener información de los mismos. Comparte la información con otras áreas cuando es necesario.',
                'test_id' => 18
            ],

            // ? Test 19
            [
                'id' => 76,
                'question_text' => 'Busca y analiza información de mercado, clientes y/o consumidores potenciales para identificar nuevas oportunidades de negocio.',
                'test_id' => 19
            ],
            [
                'id' => 77,
                'question_text' => 'Evalúa los productos, servicios y la base de clientes de la competencia para diseñar estrategias de venta que posicionen y diferencien nuestros productos y servicios.',
                'test_id' => 19
            ],
            [
                'id' => 78,
                'question_text' => 'Presenta ideas de productos y servicios que representan mejoras en los resultados de negocio.',
                'test_id' => 19
            ],
            [
                'id' => 79,
                'question_text' => 'Trabaja en conjunto con otras áreas en proyectos de mejora para explotar oportunidades de negocio.',
                'test_id' => 19
            ],

            // ? Test 20
            [
                'id' => 80,
                'question_text' => 'Identifica oportunidades de simplificación en los procesos y sistemas globales; trabaja en resolver dichas oportunidades.',
                'test_id' => 20
            ],
            [
                'id' => 81,
                'question_text' => 'Desarrolla e implementa estrategias, prácticas y/o procedimientos a nivel global que agilizan la operación del negocio.',
                'test_id' => 20
            ],
            [
                'id' => 82,
                'question_text' => 'Utiliza recursos disponibles en otras localidades, para fomentar la colaboración y maximizar los resultados de negocio.',
                'test_id' => 20
            ],
            [
                'id' => 83,
                'question_text' => 'Comprende las implicaciones multiculturales de gestionar procesos globales y adapta su estrategia para lograr la adopción y soporte en dichos procesos.',
                'test_id' => 20
            ],

            // ? Test 21
            [
                'id' => 84,
                'question_text' => 'Identifica áreas importantes para la innovación de productos y/o servicios. Desarrolla propuestas o soluciones para llevarlas a cabo.',
                'test_id' => 21
            ],
            [
                'id' => 85,
                'question_text' => 'Permanece en contacto con el entorno y actualizado sobre nuevas tendencias de mercado, productos y/o servicios. Utiliza la información para proponer nuevas alternativas de productos y/o servicios.',
                'test_id' => 21
            ],
            [
                'id' => 86,
                'question_text' => 'Promueve el cuestionamiento de esquemas tradicionales de trabajo y busca la manera de optimizarlos para lograr mejores resultados.',
                'test_id' => 21
            ],
            [
                'id' => 87,
                'question_text' => 'Provoca discusiones constructivas y respetuosas para generar nuevas ideas de productos y/o servicios.',
                'test_id' => 21
            ],

            // ? Test 22
            [
                'id' => 88,
                'question_text' => 'Diseña, implementa y ajusta estrategias, planes o programas que maximizan los resultados financieros en diferentes mercados, productos y/o unidades de negocio.',
                'test_id' => 22
            ],
            [
                'id' => 89,
                'question_text' => 'Entiende las interrelaciones entre mercados, productos y segmentos, con el fin de desarrollar estrategias integrales e interfuncionales que maximizan los resultados del Grupo.',
                'test_id' => 22
            ],
            [
                'id' => 90,
                'question_text' => 'Asegura que las diferentes estrategias se ejecutan, monitoreando resultados y haciendo ajustes conforme es requerido.',
                'test_id' => 22
            ],
            [
                'id' => 91,
                'question_text' => 'Colabora y lidera en la creación de estrategias de largo plazo para el desarrollo de productos y servicios que mejor atiendan las necesidades de nuestros clientes y/o consumidores actuales y potenciales.',
                'test_id' => 22
            ],

            // ? Test 23
            [
                'id' => 92,
                'question_text' => 'Entiende las necesidades e intereses de todas las partes involucradas, incluyendo la propia.',
                'test_id' => 23
            ],
            [
                'id' => 93,
                'question_text' => 'Genera diferentes alternativas de solución buscando satisfacer a la mayoría de las partes involucradas y contribuyendo al logro de los objetivos del grupo.',
                'test_id' => 23
            ],
            [
                'id' => 94,
                'question_text' => 'Se enfoca en puntos de interés en común; genera situaciones “ganar-ganar”.',
                'test_id' => 23
            ],
            [
                'id' => 95,
                'question_text' => 'Participa activamente en las discusiones logrando permear en la audiencia sus puntos de vista, y ganarse la confianza de los involucrados.',
                'test_id' => 23
            ],
            [
                'id' => 96,
                'question_text' => 'Se centra en el problema; se ocupa constructivamente de las emociones y del conflicto, manteniendo el respeto, sin importar el nivel de presión.',
                'test_id' => 23
            ],

            // ? Test 24
            [
                'id' => 97,
                'question_text' => 'Colabora con otras áreas de la empresa para desarrollar estrategias comerciales a largo plazo.',
                'test_id' => 24
            ],
            [
                'id' => 98,
                'question_text' => 'Comparte con los clientes los planes comerciales y de negocio a largo plazo; se asegura de mostrar cómo se van a satisfacer las necesidades actuales y futuras de los clientes y/o consumidores.',
                'test_id' => 24
            ],
            [
                'id' => 99,
                'question_text' => 'Analiza oportunidades de expansión de la red de canales de distribución y clientes clave.',
                'test_id' => 24
            ],
            [
                'id' => 100,
                'question_text' => 'Mantiene una relación cercana y sólida con los clientes clave, asegurando una relación de negocio con enfoque de largo plazo.',
                'test_id' => 24
            ],

            // ? Test 25
            [
                'id' => 101,
                'question_text' => 'Elabora planes de acción para realizar el trabajo eficientemente. Determina la extensión y complejidad de las tareas, fechas de cumplimiento y responsables.',
                'test_id' => 25
            ],
            [
                'id' => 102,
                'question_text' => 'Identifica en su área, las actividades y proyectos críticos de mayor relevancia; prioriza su propio trabajo de forma eficiente; cumple con las tareas asignadas conforme a lo planeado.',
                'test_id' => 25
            ],
            [
                'id' => 103,
                'question_text' => 'Mantiene a las personas involucradas informadas sobre los planes y avances.',
                'test_id' => 25
            ],

            // ? Test 26
            [
                'id' => 104,
                'question_text' => 'Cumple los compromisos y acuerdos previamente establecidos con clientes y/o consumidores, generando credibilidad y construyendo una imagen positiva.',
                'test_id' => 26
            ],
            [
                'id' => 105,
                'question_text' => 'Se conduce de manera congruente, mostrando consistencia entre su manera de pensar y actuar, generando en los clientes y/o consumidores un vínculo de confianza.',
                'test_id' => 26
            ],
            [
                'id' => 106,
                'question_text' => 'Establece nuevas relaciones y fomenta las ya existentes, mostrando respeto hacia los demás; reconoce y valora con sinceridad la dignidad de las personas.',
                'test_id' => 26
            ],
            [
                'id' => 107,
                'question_text' => 'Escucha y se mantiene atento ante sus clientes y/o consumidores, de tal manera que fomenta la apertura.',
                'test_id' => 26
            ],

            // ? Test 27
            [
                'id' => 108,
                'question_text' => 'Identifica y desarrolla relaciones sólidas y de largo plazo con entidades gubernamentales y grupos externos que tienen influencia en la industria.',
                'test_id' => 27
            ],
            [
                'id' => 109,
                'question_text' => 'Participa activamente en grupos externos y asociaciones para posicionar al grupo como un empleador responsable que contribuye positivamente en el ámbito social, ambiental y económico.',
                'test_id' => 27
            ],
            [
                'id' => 110,
                'question_text' => 'Realiza negociaciones o acuerdos institucionales en beneficio de Grupo FG.',
                'test_id' => 27
            ],

            // ? Test 28
            [
                'id' => 111,
                'question_text' => 'Busca proactivamente información que le ayuda a entender las necesidades y expectativas de servicio por parte de los clientes y/o consumidores.',
                'test_id' => 28
            ],
            [
                'id' => 112,
                'question_text' => 'Implementa sistemas y procesos de servicio que aseguran la satisfacción del cliente y/o consumidor.',
                'test_id' => 28
            ],
            [
                'id' => 113,
                'question_text' => 'Muestra sentido de urgencia ante los problemas o solicitudes de los clientes y/o consumidores, generando soluciones o alternativas para ellos de manera rápida.',
                'test_id' => 28
            ],
            [
                'id' => 114,
                'question_text' => 'Evalúa los niveles de satisfacción del servicio y establece planes de acción para mejorarlo.',
                'test_id' => 28
            ],
            [
                'id' => 115,
                'question_text' => 'Establece acuerdos de niveles de servicio con los clientes y/o consumidores, evitando que se generen expectativas que no se puedan cumplir.',
                'test_id' => 28
            ],

            // ? Test 29
            [
                'id' => 116,
                'question_text' => 'Involucra a los demás para asegurar el cumplimiento de las tareas y/o actividades, logrando un excelente nivel de calidad en las mismas.',
                'test_id' => 29
            ],
            [
                'id' => 117,
                'question_text' => 'Utiliza sistemas y procedimientos para dar seguimiento a las tareas y/o actividades.',
                'test_id' => 29
            ],
            [
                'id' => 118,
                'question_text' => 'Recopila y revisa la información necesaria para determinar los avances en las tareas y/o actividades asignadas. Brinda oportunamente información confiable sobre los avances de las mismas.',
                'test_id' => 29
            ],
            [
                'id' => 119,
                'question_text' => 'Se anticipa a posibles problemas que afectan el cumplimiento de las tareas y/o actividades asignadas y propone soluciones para resolverlos.',
                'test_id' => 29
            ],
            [
                'id' => 120,
                'question_text' => 'Se asegura de concluir en tiempo y forma las tareas y/o actividades que se le asignan.',
                'test_id' => 29
            ],

            // ? Test 30
            [
                'id' => 121,
                'question_text' => 'Evalúa las brechas en conocimientos, experiencias, habilidades y comportamientos que afectan el desempeño actual y futuro de la gente y da retroalimentación.',
                'test_id' => 30
            ],
            [
                'id' => 122,
                'question_text' => 'Proporciona asesoría y guía para el desarrollo de habilidades y conocimientos, a fin de ayudar a los demás a cumplir sus objetivos.',
                'test_id' => 30
            ],
            [
                'id' => 123,
                'question_text' => 'Asiste a la gente en la creación de planes de desarrollo que incluyen actividades de aprendizaje en su puesto, aprendizaje de otros y capacitación.',
                'test_id' => 30
            ],
            [
                'id' => 124,
                'question_text' => 'Ayuda a las personas a comprender la importancia de tomar el liderazgo de su propio plan de aprendizaje y desarrollo en la compañía.',
                'test_id' => 30
            ],
            [
                'id' => 125,
                'question_text' => 'Ayuda a que su equipo tenga visibilidad y exposición con niveles más altos en la organización.',
                'test_id' => 30
            ],

            // ? Test 31
            [
                'id' => 126,
                'question_text' => 'Se asegura que el equipo comprende los objetivos de negocio y del área; asiste al equipo en la elaboración de objetivos individuales diseñados para alcanzar resultados excepcionales.',
                'test_id' => 31
            ],
            [
                'id' => 127,
                'question_text' => 'Evalúa el progreso de los objetivos de la gente y proporciona retroalimentación de manera oportuna y específica; expresa confianza en las personas.',
                'test_id' => 31
            ],
            [
                'id' => 128,
                'question_text' => 'Dirige al equipo para alcanzar o superar las metas en el tiempo establecido; brinda apoyo o recursos cuando es necesario.',
                'test_id' => 31
            ],
            [
                'id' => 129,
                'question_text' => 'Asigna al equipo autoridad en la toma las decisiones y responsabilidad de llevar a cabo los planes de trabajo.',
                'test_id' => 31
            ],
            [
                'id' => 130,
                'question_text' => 'Es congruente entre el decir y actuar y fomenta que su equipo sea congruente.',
                'test_id' => 31
            ],

            // ? Test 32
            [
                'id' => 131,
                'question_text' => 'Inspira a la gente utilizando palabras y acciones apropiadas para ayudarla a adoptar nuevos enfoques cuando es requerido.',
                'test_id' => 32
            ],
            [
                'id' => 132,
                'question_text' => 'Influye, asesora y comunica de manera clara la necesidad del cambio cuando es requerido, logrando obtener aceptación y compromiso de los demás.',
                'test_id' => 32
            ],
            [
                'id' => 133,
                'question_text' => 'Da orientación y guía a las personas que se resisten al cambio, mostrando una actitud empática en el proceso de adaptación.',
                'test_id' => 32
            ],
            [
                'id' => 134,
                'question_text' => 'Trata de reducir los riesgos generados por el cambio, minimizando su impacto en la gente.',
                'test_id' => 32
            ],
            [
                'id' => 135,
                'question_text' => 'Impulsa y promueve la búsqueda constante de nuevas ideas o modelos que pueden aportar mejoras al negocio.',
                'test_id' => 32
            ],

            // ? Test 33
            [
                'id' => 136,
                'question_text' => 'Administra los gastos conforme a los planes presupuestales del área.',
                'test_id' => 33
            ],
            [
                'id' => 137,
                'question_text' => 'Reduce el costo de las operaciones al instrumentar estrategias creativas para administrar gastos; optimiza recursos en caso de ser requerido por el negocio.',
                'test_id' => 33
            ],
            [
                'id' => 138,
                'question_text' => 'Promueve iniciativas de revisión y eficiencia de procesos de negocio.',
                'test_id' => 33
            ],
            [
                'id' => 139,
                'question_text' => 'Conduce un equipo financieramente responsable que comprende el valor de administrar eficientemente los recursos del grupo.',
                'test_id' => 33
            ],

            // ? Test 34
            [
                'id' => 140,
                'question_text' => 'Cuestiona de manera respetuosa, la manera tradicional de hacer las cosas.',
                'test_id' => 34
            ],
            [
                'id' => 141,
                'question_text' => 'Propone nuevas ideas que se diferencian de creencias o conceptos tradicionales de negocio.',
                'test_id' => 34
            ],
            [
                'id' => 142,
                'question_text' => 'Demuestra que adoptar esquemas de pensamiento nuevos y sumarlos a lo ya existente, trae beneficios al grupo.',
                'test_id' => 34
            ],
            [
                'id' => 143,
                'question_text' => 'Promueve que su equipo cuestione el sistema y, cuando es conveniente, opere de una manera distinta para impactar positivamente al negocio.',
                'test_id' => 34
            ],

            // ? Test 35
            [
                'id' => 144,
                'question_text' => 'Evalúa las fortalezas y debilidades organizacionales y adapta las estructuras y procesos de negocio para ser más eficientes y lograr los objetivos de negocio.',
                'test_id' => 35
            ],
            [
                'id' => 145,
                'question_text' => 'Genera cambios organizacionales a gran escala durante momentos críticos de negocio, cambios tecnológicos o fluctuaciones económicas y de mercado.',
                'test_id' => 35
            ],
            [
                'id' => 146,
                'question_text' => 'Promueve un sistema de administración de alto desempeño y garantiza recursos adicionales cuando es requerido.',
                'test_id' => 35
            ],
            [
                'id' => 147,
                'question_text' => 'Promueve una cultura de aprendizaje y desarrollo de la gente y crea planes de sucesión para posiciones estratégicas en su área.',
                'test_id' => 35
            ],

            // ? Test 36
            [
                'id' => 148,
                'question_text' => 'Analiza la información cualitativa y cuantitativa del negocio para definir los problemas y asuntos organizacionales más relevantes.',
                'test_id' => 36
            ],
            [
                'id' => 149,
                'question_text' => 'Establece y se compromete con prioridades estratégicas considerando los factores relevantes de negocio y de mercado, así como la Cultura del grupo FG.',
                'test_id' => 36
            ],
            [
                'id' => 150,
                'question_text' => 'Identifica cómo la dirección estratégica será lograda al establecer metas y objetivos a corto y largo plazo.',
                'test_id' => 36
            ],
            [
                'id' => 151,
                'question_text' => 'Se asegura que la dirección estratégica de su área de responsabilidad está alineada a la dirección estratégica del negocio y la permea.',
                'test_id' => 36
            ],

            // ? Test 37
            [
                'id' => 152,
                'question_text' => 'Inicia y mantiene relaciones estratégicas dentro y fuera de la organización que facilitarán el cumplimiento de los objetivos de negocio.',
                'test_id' => 37
            ],
            [
                'id' => 153,
                'question_text' => 'Presenta recomendaciones y fundamentos lógicos de tal forma que están conectados claramente con las prioridades de negocio.',
                'test_id' => 37
            ],
            [
                'id' => 154,
                'question_text' => 'Logra de manera formal e informal el apoyo para las recomendaciones y acciones, involucrando a las diferentes áreas.',
                'test_id' => 37
            ],
            [
                'id' => 155,
                'question_text' => 'Fomenta la confianza durante el proceso de influencia, demostrando sensibilidad ante las necesidades de los otros. Considera las diferentes perspectivas de la gente y convence a otros de tomar acciones y lograr acuerdos.',
                'test_id' => 37
            ],
            [
                'id' => 156,
                'question_text' => 'Planifica acciones e iniciativas considerando apropiadamente las reacciones más probables de la gente. Anticipa en forma apropiada las consecuencias políticas de las acciones.',
                'test_id' => 37
            ],

            // ? Test 38
            [
                'id' => 157,
                'question_text' => 'Inspira a la gente utilizando palabras y acciones apropiadas para ayudarla a visualizar y moverse hacia niveles más altos de desempeño; expresa confianza en ellos y estimula el entusiasmo para conseguir mejores resultados.',
                'test_id' => 38
            ],
            [
                'id' => 158,
                'question_text' => 'Da seguimiento al desempeño de los equipos y toma acciones para mantenerlo en el camino correcto; ayuda a superar las barreras y a resolver los conflictos; provee retroalimentación continua y orientación apropiada.',
                'test_id' => 38
            ],
            [
                'id' => 159,
                'question_text' => 'Reconoce y actúa de forma que garantiza que los demás pueden permanecer concentrados y sentirse apoyados en entornos de mucha presión.',
                'test_id' => 38
            ],
            [
                'id' => 160,
                'question_text' => 'Crea un equipo de líderes que es responsable por los resultados y que está comprometido con el éxito de cada uno en lo individual y del grupo.',
                'test_id' => 38
            ],
            [
                'id' => 161,
                'question_text' => 'Es congruente entre el decir y actuar y fomenta que su equipo sea congruente.',
                'test_id' => 38
            ],

            // ? Test 39
            [
                'id' => 162,
                'question_text' => 'Entiende hacia dónde va el negocio y cómo poder influir para alcanzar las metas.',
                'test_id' => 39
            ],
            [
                'id' => 163,
                'question_text' => 'Describe con pasión la visión y la Cultura del grupo de tal forma que ayuda a otros a comprender su impacto potencial en el negocio.',
                'test_id' => 39
            ],
            [
                'id' => 164,
                'question_text' => 'Se comunica en una forma que capta la atención, provoca emoción e impulsa a otros a tomar acción para contribuir en forma personal a la visión.',
                'test_id' => 39
            ],
            [
                'id' => 165,
                'question_text' => 'Utiliza la visión y la Cultura como principios para conducir sus propias actividades.',
                'test_id' => 39
            ],
            [
                'id' => 166,
                'question_text' => 'Traduce la visión y la Cultura a la organización, al vincularlos con el desempeño de la gente.',
                'test_id' => 39
            ],
        ]);
    }
}
