<?php

namespace Database\Seeders;

use App\Models\Competency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tests')->insert([
            [
                'id' => 1,
                'name' => 'Enfoque en el cliente',
                'description' => 'Satisfacer plenamente las expectativas de nuestros clientes y/o consumidores con productos y servicios innovadores, de alta calidad y competitivos.',
                'competency_id' => Competency::CLAVE,
            ],
            [
                'id' => 2,
                'name' => 'Orientación a resultados',
                'description' => 'Trabajar con perseverancia para complir y superar metas desafiantes que controbuyen al éxito de nuestro grupo.',
                'competency_id' => Competency::CLAVE,
            ],
            [
                'id' => 3,
                'name' => 'Trabajo en equipo y colaboración',
                'description' => 'Trabajar de manera eficaz y en cooperación con otros, orientados a procesos de negocio para lograr los objetivos del grupo.',
                'competency_id' => Competency::CLAVE,
            ],
            [
                'id' => 4,
                'name' => 'Administración de proyectos',
                'description' => 'Gestionar proyectos de forma efectiva con la finalidad de optimizar los resultados esperados dentro de los tiempos establecidos.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 5,
                'name' => 'Aplicación del conocimiento profesional',
                'description' => 'Comprender el modelo de negocio del grupo FG, así como las tendencias externas del mercado e industria para proponer cursos de acción adecuados en el ámbito legal y corporativo.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 6,
                'name' => 'Conocimiento y cumplimiento de políticas financieras',
                'description' => 'Comprender las políticas y procedimientos financieros, requerimientos regulatorios y controles internos; garantizar el cumplimiento de los mismos dentro del grupo FG.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 7,
                'name' => 'Conocimiento y entendimiento del negocio',
                'description' => 'Monitorear y utilizar información económica, financiera, de mercado y/o industria para mejoar los resultados de negocio.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 8,
                'name' => 'Conocimiento y entendimiento global',
                'description' => 'Comprender las tendencias económicas, sociales y políticas a nivel mundial, así como el impacto que pueden tener para FG en el corto, mediano y largo plazo.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 9,
                'name' => 'Consultor confiable',
                'description' => 'Asesorar y guiar a los clientes de manera asertiva y efectiva, para resolver y evitar problemas de negocio.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 10,
                'name' => 'Decisiones en la operación de ventas',
                'description' => 'Tomar decisiones operativas necesarias para atender oportuna y eficientemente a nuestros clientes y/o consumidores.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 11,
                'name' => 'Desarrollo de talento organizacional',
                'description' => 'Diseñar y adoptar en toda la organización una infraestructura para desarrollar, motivar, atraer y cuidar el talento necesario para lograr los objetivos de Grupo FG.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 12,
                'name' => 'Eficiencia operativa',
                'description' => 'Identificar oportunidades de mejora en nuestros procesos, productos y servicios; generar ideas de eficiencia e implementar soluciones.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 13,
                'name' => 'Enfoque en la calidad',
                'description' => 'Elaborar y ofrecer productos y servicios que satisfagan las necesidades de nuestros clientes y/o consumidores.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 14,
                'name' => 'Espíritu emprendedor',
                'description' => 'Comprender las variables clave de mercados emergentes para generar y aprovechar oportunidades de negocio; ser capz de expandirse globalmente.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 15,
                'name' => 'Excelencia en mercadotecnia',
                'description' => 'Diseñar y establecer estrategias efectivas de mercadotecnia que posicionen nuestros productos a nivle global y contribuyan al crecimiento del grupo.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 16,
                'name' => 'Excelencia en procesos financieros',
                'description' => 'Asegurar que los sistemas financieros facilitan los procesos de negocio para contriibuir al crecimiento de grupo FG.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 17,
                'name' => 'Excelencia técnica y producto',
                'description' => 'Contar con amplio conocimiento en el área de especialización, asi como de los procesos de manufactura, productos y servicios de grupo FG.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 18,
                'name' => 'Generación de lealtad del cliente',
                'description' => 'Generar relaciones sólidas y de largo plazo con nuestros clientes y/o consumidores; Ganar sus corazones.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 19,
                'name' => 'Generación de oportunidades de negocio',
                'description' => 'Generar proactivamente oportunidades de negocio explorando mercados, clientes y/o consumidores potenciales de nueztros productos y servicios.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 20,
                'name' => 'Gestion de procesos globales',
                'description' => 'Establecer y/o utilizar sistemas y procesos a nivle global con el objetivo de alcanzar altos niveles de eficiencia, considerando las diferentes áreas en la cadena de valor.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 21,
                'name' => 'Inovación',
                'description' => 'Generar nuevas alternativas de productos y servicios enfocados al cliente y/o consumidor; promover nuevas ideas para operar el negocio y colaborar en el logro de los objetivos del grupo.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 22,
                'name' => 'Liderazgo de estategia del negocio',
                'description' => 'Establecer e impulsar los objetivos estratégicos del negocio para lograr el crecimiento del grupo a largo plazo.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 23,
                'name' => 'Negociación',
                'description' => 'Explorar de manera eficaz diversar alternativas y perspectivas para lograr acuerdos en común, que contribuyan a alcanzar los objetivos del grupo FG.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 24,
                'name' => 'Planeación de ventas estratégicas',
                'description' => 'Establecer planes comerciales a largo plazo maximizando las oportunidades de negocio; expandir la red de canales de distribución y clientes clave.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 25,
                'name' => 'Planeación y organización',
                'description' => 'Establecer cursos de acción para asegurar que se realice el trabajo de manera eficiente logrando los resultados de negocio.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 26,
                'name' => 'Relaciones de confianza',
                'description' => 'Mantener un estilo interpersonal apropieado para construir relaciones efectivas con los clientes y/o consumidores; interactuar con los demás en una forma que promueva la apertura y credibilidad.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 27,
                'name' => 'Relaciones externas',
                'description' => 'Fortalecer vínculos sólidos y de largo plazo con instituciones gubernamentales y grupos externos, para influir en desiciones que impacten positivamente los resultados de negocio.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 28,
                'name' => 'Reputación de servicio',
                'description' => 'Crear un prestigio de calidad en el servicio brindado a los clientes y/o consumidores una experencia positiva al cumplir o exceder sus expectativas.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 29,
                'name' => 'Seguimiento',
                'description' => 'Asegurar el cumplimiento de las tareas y/o actividades asignadas en tiempo y forma.',
                'competency_id' => Competency::PROFESIONAL,
            ],
            [
                'id' => 30,
                'name' => 'Desarrollo de gerente',
                'description' => 'Apoyar y promover el aprendizaje y desarrollo de la gente buscando su crecimiento personal y profesional.',
                'competency_id' => Competency::GERENCIAL,
            ],
            [
                'id' => 31,
                'name' => 'Excelencia en la ejecución',
                'description' => 'Dirigir y guiar al equipo para ejecurar de manera efectiva los planeas de trabajo para lograr los resultados esperados.',
                'competency_id' => Competency::GERENCIAL,
            ],
            [
                'id' => 32,
                'name' => 'Liderazgo de equipo',
                'description' => 'Facilitar la implemetación y aceptación de los cambios estratégicos que el negocio requiere; persuadir a la gente para identificar enfoques distintos e innovadores a fin de solucionar problemas y maximizar oportunidades.',
                'competency_id' => Competency::GERENCIAL,
            ],
            [
                'id' => 33,
                'name' => 'Optimización de recursos y presupuestos',
                'description' => 'Administrar de manera efectiva los recursos y aletar a los empleados a ver el valor de una organización eficiente y rentable.',
                'competency_id' => Competency::GERENCIAL,
            ],
            [
                'id' => 34,
                'name' => 'Pensamiento creativo',
                'description' => 'Proponer nuevas ideas que son diferentes a las creencias o conceptos tradicionales de negocio; cuestionar el sistema construcctivamente para lograr mejores resultados.',
                'competency_id' => Competency::GERENCIAL,
            ],
            [
                'id' => 35,
                'name' => 'Capacidad organizacional',
                'description' => 'Crear estructuras ágiles y sustentables; identificar áreas de negocio que requieren desarrollo, mejora o revitalización; promover el desarrollo de la gente.',
                'competency_id' => Competency::DIRECCIÓN,
            ],
            [
                'id' => 36,
                'name' => 'Dirección estratégica',
                'description' => 'Establecer y comprometerse con una dirección de negocio a largo plazo basada en un análisis sistémico de la información de negocio y mercado, así com ola cultura de Grupo FG.',
                'competency_id' => Competency::DIRECCIÓN,
            ],
            [
                'id' => 37,
                'name' => 'Influencia e impacto',
                'description' => 'Mantener relaciones estratégicas en la organización; persuadir a la gente para tomar decisiones que favorecen el logro de los objetivos de grupo FG.',
                'competency_id' => Competency::DIRECCIÓN,
            ],
            [
                'id' => 38,
                'name' => 'Liderazgo organizacional',
                'description' => 'Utilizar métodos y estilos interpersonales apropiados para desarrollar, inspirar y guiar con pasión a la organización para alcanzar los objetivos del grupo FG.',
                'competency_id' => Competency::DIRECCIÓN,
            ],
            [
                'id' => 39,
                'name' => 'Visión de negocio',
                'description' => 'Transmitir con entusiasmo una visuón convincente del estado futuro del negocio, de manera que ayude a los demás a comprender los resultados y situación de la empresa en el largo plazo.',
                'competency_id' => Competency::DIRECCIÓN,
            ],
        ]);
    }
}
