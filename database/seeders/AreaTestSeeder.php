<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\Test;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AreaTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('area_test')->insert([
            //? AUDITORIA INTERNA
            [
                'area_id' => Area::AUDITORIA_INTERNA,
                'test_id' => Test::APLICACION_CONOCIMIENTO_PROFESIONAL
            ],
            [
                'area_id' => Area::AUDITORIA_INTERNA,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::AUDITORIA_INTERNA,
                'test_id' => Test::NEGOCIACION
            ],
            [
                'area_id' => Area::AUDITORIA_INTERNA,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],
            [
                'area_id' => Area::AUDITORIA_INTERNA,
                'test_id' => Test::RELACIONES_EXTERNAS
            ],
            
            //? LOGISTICA
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::GENERACION_LEALTAD_CLIENTE
            ],
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::GESTION_PROCESOS_GLOBALES
            ],
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::INNOVACION
            ],
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::NEGOCIACION
            ],
            [
                'area_id' => Area::LOGISTICA,
                'test_id' => Test::REPUTACION_SERVICIO
            ],

            //? COMPRAS 
            [
                'area_id' => Area::COMPRAS,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::COMPRAS,
                'test_id' => Test::ENTENDIMIENTO_GLOBAL
            ],
            [
                'area_id' => Area::COMPRAS,
                'test_id' => Test::GESTION_PROCESOS_GLOBALES
            ],
            [
                'area_id' => Area::COMPRAS,
                'test_id' => Test::NEGOCIACION
            ],
            [
                'area_id' => Area::COMPRAS,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],

            //? ADMINITRACION
            [
                'area_id' => Area::ADMINISTRACION,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::ADMINISTRACION,
                'test_id' => Test::POLITICAS_FINANCIERAS
            ],
            [
                'area_id' => Area::ADMINISTRACION,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::ADMINISTRACION,
                'test_id' => Test::EXCELENCIA_PROCESOS_FINANCIEROS
            ],
            [
                'area_id' => Area::ADMINISTRACION,
                'test_id' => Test::LIDERAZGO_ESTRATEGIA_NEGOCIO
            ],

            //? ALMACEN
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::GENERACION_LEALTAD_CLIENTE
            ],
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::GESTION_PROCESOS_GLOBALES
            ],
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::INNOVACION
            ],
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::NEGOCIACION
            ],
            [
                'area_id' => Area::ALMACEN,
                'test_id' => Test::REPUTACION_SERVICIO
            ],

            //? AUDITORIA EXTERNA
            [
                'area_id' => Area::AUDITORIA_EXTERNA,
                'test_id' => Test::APLICACION_CONOCIMIENTO_PROFESIONAL
            ],
            [
                'area_id' => Area::AUDITORIA_EXTERNA,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::AUDITORIA_EXTERNA,
                'test_id' => Test::NEGOCIACION
            ],
            [
                'area_id' => Area::AUDITORIA_EXTERNA,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],
            [
                'area_id' => Area::AUDITORIA_EXTERNA,
                'test_id' => Test::LIDERAZGO_ESTRATEGIA_NEGOCIO
            ],

            //? MANUFACTURA
            [
                'area_id' => Area::MANUFACTURA,
                'test_id' => Test::ADMINISTRACION_PROYECTOS
            ],
            [
                'area_id' => Area::MANUFACTURA,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::MANUFACTURA,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::MANUFACTURA,
                'test_id' => Test::ENFOQUE_CALIDAD
            ],
            [
                'area_id' => Area::MANUFACTURA,
                'test_id' => Test::EXCELENCIA_TECNICA_PRODUCTO
            ],
            [
                'area_id' => Area::MANUFACTURA,
                'test_id' => Test::GESTION_PROCESOS_GLOBALES
            ],

            //? MERCADOCTENIA
            [
                'area_id' => Area::MERCADOTECNIA,
                'test_id' => Test::ADMINISTRACION_PROYECTOS
            ],
            [
                'area_id' => Area::MERCADOTECNIA,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::MERCADOTECNIA,
                'test_id' => Test::EXCELENCIA_MERCADOTECNIA
            ],
            [
                'area_id' => Area::MERCADOTECNIA,
                'test_id' => Test::GENERACION_LEALTAD_CLIENTE
            ],
            [
                'area_id' => Area::MERCADOTECNIA,
                'test_id' => Test::GENERACION_OPORTUNIDADES_NEGOCIO
            ],
            [
                'area_id' => Area::MERCADOTECNIA,
                'test_id' => Test::INNOVACION
            ],

            //? INGENERIA
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::ADMINISTRACION_PROYECTOS
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::ENFOQUE_CALIDAD
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::EXCELENCIA_TECNICA_PRODUCTO
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::GENERACION_OPORTUNIDADES_NEGOCIO
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::INNOVACION
            ],
            [
                'area_id' => Area::INGENIERIA,
                'test_id' => Test::LIDERAZGO_ESTRATEGIA_NEGOCIO
            ],

            //? RECURSOS HUMANOS
            [
                'area_id' => Area::RECURSOS_HUMANOS,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::RECURSOS_HUMANOS,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::RECURSOS_HUMANOS,
                'test_id' => Test::DESARROLLO_TALENTO_ORGANIZACIONAL
            ],
            [
                'area_id' => Area::RECURSOS_HUMANOS,
                'test_id' => Test::NEGOCIACION
            ],
            [
                'area_id' => Area::RECURSOS_HUMANOS,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],
            [
                'area_id' => Area::RECURSOS_HUMANOS,
                'test_id' => Test::RELACIONES_CONFIANZA
            ],

            //? ATENCION A CLIENTES
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::EXCELENCIA_TECNICA_PRODUCTO
            ],
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::GENERACION_LEALTAD_CLIENTE
            ],
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::RELACIONES_CONFIANZA
            ],
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::REPUTACION_SERVICIO
            ],
            [
                'area_id' => Area::ATENCION_CLIENTES,
                'test_id' => Test::SEGUIMIENTO
            ],

            //? TICS
            [
                'area_id' => Area::TECNOLOGIAS_INFORMACION,
                'test_id' => Test::ADMINISTRACION_PROYECTOS
            ],
            [
                'area_id' => Area::TECNOLOGIAS_INFORMACION,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::TECNOLOGIAS_INFORMACION,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::TECNOLOGIAS_INFORMACION,
                'test_id' => Test::INNOVACION
            ],
            [
                'area_id' => Area::TECNOLOGIAS_INFORMACION,
                'test_id' => Test::REPUTACION_SERVICIO
            ],

            //? VENTAS
            [
                'area_id' => Area::VENTAS,
                'test_id' => Test::ENTENDIMIENTO_NEGOCIO
            ],
            [
                'area_id' => Area::VENTAS,
                'test_id' => Test::DECISIONES_OPERACION_VENTAS
            ],
            [
                'area_id' => Area::VENTAS,
                'test_id' => Test::GENERACION_LEALTAD_CLIENTE
            ],
            [
                'area_id' => Area::VENTAS,
                'test_id' => Test::GENERACION_OPORTUNIDADES_NEGOCIO
            ],
            [
                'area_id' => Area::VENTAS,
                'test_id' => Test::LIDERAZGO_ESTRATEGIA_NEGOCIO
            ],
            [
                'area_id' => Area::VENTAS,
                'test_id' => Test::PLANEACION_VENTAS_ESTRATEGICAS
            ],
            
            //? PRODUCCION
            [
                'area_id' => Area::PRODUCCION,
                'test_id' => Test::ADMINISTRACION_PROYECTOS
            ],
            [
                'area_id' => Area::PRODUCCION,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::PRODUCCION,
                'test_id' => Test::ENFOQUE_CALIDAD
            ],
            [
                'area_id' => Area::PRODUCCION,
                'test_id' => Test::EXCELENCIA_TECNICA_PRODUCTO
            ],
            
            //? CALIDAD
            [
                'area_id' => Area::CALIDAD,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],
            [
                'area_id' => Area::CALIDAD,
                'test_id' => Test::SEGUIMIENTO
            ],
            [
                'area_id' => Area::CALIDAD,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::CALIDAD,
                'test_id' => Test::ENFOQUE_CALIDAD
            ],
            [
                'area_id' => Area::CALIDAD,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
            [
                'area_id' => Area::CALIDAD,
                'test_id' => Test::EXCELENCIA_TECNICA_PRODUCTO
            ],

            //? SEGURIDAD HIGIENE
            [
                'area_id' => Area::SEGURIDAD_HIGIENE,
                'test_id' => Test::CONSULTOR_CONFIABLE
            ],
            [
                'area_id' => Area::SEGURIDAD_HIGIENE,
                'test_id' => Test::REPUTACION_SERVICIO
            ],
            [
                'area_id' => Area::SEGURIDAD_HIGIENE,
                'test_id' => Test::SEGUIMIENTO
            ],
            [
                'area_id' => Area::SEGURIDAD_HIGIENE,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],
            [
                'area_id' => Area::SEGURIDAD_HIGIENE,
                'test_id' => Test::RELACIONES_CONFIANZA
            ],
            
            //? MENTENIMIENTO
            [
                'area_id' => Area::MANTENIMIENTO,
                'test_id' => Test::REPUTACION_SERVICIO
            ],
            [
                'area_id' => Area::MANTENIMIENTO,
                'test_id' => Test::SEGUIMIENTO
            ],
            [
                'area_id' => Area::MANTENIMIENTO,
                'test_id' => Test::PLANEACION_ORGANIZACION
            ],
            [
                'area_id' => Area::MANTENIMIENTO,
                'test_id' => Test::EFICIENCIA_OPERATIVA
            ],
        ]);
    }
}
