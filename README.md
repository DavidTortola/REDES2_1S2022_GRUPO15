Universidad de San Carlos de Guatemala \
Facultad de Ingeniería \
Escuela de Ciencias y Sistemas \
Redes de Computadoras 2 \
Segundo Semestre 2022 

# Proyecto #1 - Fase #1
 
 
| No. | Integrantes - Grupo #15          | Carnet    |
|-----|----------------------------------|-----------|
| 1   | Osmel David Tórtola Tistoj       | 201404218 |
| 2   | Erick Antonio Valenzuela Rivas   |           |
| 3   | Fernando Alberto Ambrosio Aleman |           |
| 4   |                                  |           |
  
  
## Índice

- [Introduccion:scroll:](#Introduccion)
- [Arquitectura del sistema:house:](#Arquitectura)
- [Máquinas EC2:computer:](#MaquinasEC2)
- [Load Balancer:bar_chart:](#LoadBalancer)
- [Dominios (NameCheap):earth_americas:](#Dominios)
- [Route 53:globe_with_meridians:](#Route53)
- [Página web (Frontend y Backend):newspaper:](#Frontend)

<a  name="Introduccion"></a>

## Introduccion:scroll:

La empresa Ucron solicita la creación de una página web para dos de sus departamentos más importantes en el país, esto para poder darse a conocer tanto local como globalmente y poder administrar sus recursos. Se solicita realizarlo en la nube y también utilizar un administrador de dominios para que su página web esté posicionada en los primeros puestos de búsqueda. Los dos departamentos de la empresa son el departamento de `función pública` y el `departamento de desarrollo económico`.


<a  name="Arquitectura"></a>

## Arquitectura del sistema:house:

El sistema de la empresa Ucron se construyó dentro del ecosistema de `AWS`, utilizando las diferentes herramientas que Amazon provee para construir la arquitectura deseada. Para administrar el frontend y el backend se decidió utilizar máquinas `EC2`, creando 2 máquinas para mayor disponibilidad, ya que estas estarán corriendo réplicas del mismo sistema.

Posteriormente, se utilizó la herramienta `Load Balancer` de AWS para poder realizar la administración de las cargas que reciben las máquinas `EC2`, permitiendo de esta manera que el sistema sea mucho más resistente a caídas, también permitiendo a futuro poder adquirir más máquinas en diferentes regiones para soportar aún más tráfico.

Finalmente, se adquirió 2 dominios por medio de la plataforma `NameCheap`, los cuales son `ucron-economica.lol` y `ucron-publica.lol` para ambos departamentos de la empresa. Estos dominios se enlazan a nuestro balanceador de cargas utilzando la herramienta de `Amanzon Route 53`, la cual nos permite configurar nuestros dominios y redigir el tráfico hacia nuestras máquinas `EC2`.

![image](https://user-images.githubusercontent.com/25576463/197362876-ec65e469-9509-4f9b-8338-8df45a08a9ec.png)


<a  name="MaquinasEC2"></a>

## Máquinas EC2:computer:



