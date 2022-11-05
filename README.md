Universidad de San Carlos de Guatemala \
Facultad de Ingeniería \
Escuela de Ciencias y Sistemas \
Redes de Computadoras 2 \
Ing. Manuel Fernando López \
Auxiliar Edgar Cil \
Segundo Semestre 2022 

# Proyecto #1 - Fase #1
 
 
| No. | Integrantes - Grupo #15          | Carnet    |
|-----|----------------------------------|-----------|
| 1   | Osmel David Tórtola Tistoj       | 201404218 |
| 2   | Erick Antonio Valenzuela Rivas   | 201404106 |
| 3   | Fernando Alberto Ambrosio Aleman | 201404319 |
  
  
## Índice

- [Introduccion:scroll:](#Introduccion)
- [Arquitectura del sistema:house:](#Arquitectura)
- [Máquinas EC2:computer:](#MaquinasEC2)
- [Load Balancer:bar_chart:](#LoadBalancer)
- [Dominios (Namecheap):earth_americas:](#Dominios)
- [Route 53:globe_with_meridians:](#Route53)
- [Página web (Frontend y Backend):newspaper:](#Frontend)

<a  name="Introduccion"></a>

## Introduccion:scroll:

El país de Ucron ahora cuenta con una página para darse a conocer al mundo; sin embargo, aún no cuentan con la seguridad para prevenir futuros ataques
cibernéticos y el servicio no cumple con la disponibilidad adecuada para cubrir la demanda de peticiones realizadas.
Por ello le solicita nuevamente que realice la configuración necesaria dentro de la nube para salvaguardar la información con la que cuentan dentro de su gobierno y restringir el acceso a la misma utilizando los servicios que proporciona AWS.


<a  name="Arquitectura"></a>

## Arquitectura del sistema:house:

El sistema de la empresa Ucron se construyó dentro del ecosistema de `AWS`, utilizando las diferentes herramientas que Amazon provee para construir la arquitectura deseada. Para administrar el frontend y el backend se decidió utilizar máquinas `EC2`, creando 5 máquinas para mayor disponibilidad, ya que estas estarán corriendo réplicas del mismo sistema.

Posteriormente, se utilizó la herramienta `Load Balancer` de AWS para poder realizar la administración de las cargas que reciben las máquinas `EC2`, permitiendo de esta manera que el sistema sea mucho más resistente a caídas, también permitiendo a futuro poder adquirir más máquinas en diferentes regiones para soportar aún más tráfico.

Finalmente, se adquirió 2 dominios por medio de la plataforma `NameCheap`, los cuales son `ucron-economica.lol` y `ucron-publica.lol` para ambos departamentos de la empresa. Estos dominios se enlazan a nuestro balanceador de cargas utilzando la herramienta de `Amanzon Route 53`, la cual nos permite configurar nuestros dominios y redigir el tráfico hacia nuestras máquinas `EC2`.

![image](https://user-images.githubusercontent.com/24425432/200105813-1fe4803f-a04e-4219-9b1b-9347660c73f1.png)

<a  name="MaquinasEC2"></a>

## Máquinas EC2:computer:

Se construyeron inicialmente dos máquinas `EC2`, con la posibilidad de poder agregar más máquinas en un futuno cercano si fuera necesario. Estas máquinas EC2 están corriendo el sistema operativo `Ubuntu Server 22.04 LTS` ya que pertenece a la capa gratuita, proveyendo un mejor costo-beneficio para la empresa. También se utilizó la herramienta `Apache Server` para poner a disposición la página web de la empresa.

### En las máquinas `EC2` se realizaron las siguientes configuraciones:

Primero se establece un password personalizado para mayor seguridad
```
sudo su -
passwd ubuntu
```

Después se realiza una actualización de paquetes y se instala apache
```
sudo apt update
sudo apt install apache2
sudo systemctl status apache2
```

Finalmente se copia el repositorio donde está ubicada la página web y se copia en la ubicación donde está el servidor de Apache
```
cd /home/ubuntu/
git clone https://github.com/DavidTortola/REDES2_1S2022_GRUPO15.git
sudo cp -a /home/ubuntu/REDES2_1S2022_GRUPO15/Frontend/. /var/www/html/
```

Para comprobar que la página esté corriendo correctamente se puede conectarse por medio de un browser a la ip pública de alguna de las máquinas `EC2`, por ejemplo `http://3.145.170.149/`


<a  name="LoadBalancer"></a>

## Load Balancer:bar_chart:

Para el balanceo de cargas se utilizó la herramienta de amazon `Load Balancer` la cual nos permite enlazar nuestras máquinas `EC2` y distribuir la carga equitativamente para un mejor tráfico para los clientes, así como mayor resistencia a caídas, ya que si alguna de las máquinas estuviera abajo, se encargaría de distribuir el flujo de carga hacia la otra que esté arriba.

### Las configuraciones realizadas en nuestro balanceador de carga fueron las siguientes:

| ![image](https://user-images.githubusercontent.com/25576463/197363388-850bc124-8161-4d02-b86f-2073d1b21b02.png) | 
|:--:| 
| *Se utilizó el balanceador clásico, pero también se puede utilizar un balanceador de aplicaciones* |


| ![image](https://user-images.githubusercontent.com/25576463/197363450-9e310620-c00f-4935-84ef-057dc2a13f51.png) | 
|:--:| 
| *Nos aseguramos de utilizar siempre los puertos por default, en este caso el 80, posteriormente con certificados de seguridad se modificará para utilizar los puertos seguros 443* |

| ![image](https://user-images.githubusercontent.com/25576463/197363477-024c3828-5ca7-49cf-acbe-1d5f2143d4ef.png) | 
|:--:| 
| *Algo muy importante es la comprobación del estado, en este punto se configura la ruta a la cual el balanceador de carga realizará una conexión para confirmar que la página web esté disponible, si no colocamos la correcta no funcionará* |

| ![image](https://user-images.githubusercontent.com/25576463/197363493-2dcd6761-10f1-4269-87d7-2872e2652a9f.png) | 
|:--:| 
| *Finalmente se configuran los nodos que conectaremos al balanceador de carga, en este caso nuestras dos máquinas EC2* |

<a  name="Dominios"></a>

## Dominios (Namecheap):earth_americas:

![image](https://user-images.githubusercontent.com/25576463/197363551-c2469992-1147-444d-9eb5-3af43bcff357.png)

La adquisición de los dominios se realizó por medio de la plataforma Namecheap, la cual nos permitió comprar dos dominios: `ucron-publica.lol` y `ucron-economica.lol`.  Namecheap es una empresa que se dedica a realizar registros de nombres de dominios, y que provee herramientas para compras de dominiosy también web hosting, sin embargo en este caso no la utilizamos para hostear nuestra web ya que se hará por medio de las máquinas AWS EC2.

En la plataforma de Namecheap fue necesario realizar una configuracion de DNS para poder enlazarlo hacia nuestro Route 53:

| ![image](https://user-images.githubusercontent.com/25576463/197363585-44d3d21c-1452-4685-a4dc-36d9617e6d85.png) | 
|:--:| 
| ![image](https://user-images.githubusercontent.com/25576463/197363593-66d4402a-343e-4fa5-8486-d1f7eccf334c.png) | 
| *Esta configuracion nos permite redirigir trafico desde nuestro dominio hacia nuestro balanceador de carga y finalmente a nuestra página web* |


<a  name="Route53"></a>

## Route 53:globe_with_meridians:

El Amazon Route 53 es una herramienta creada para administrar servicios de DNS, es escalable y de alta disponibilidad en la nube. Permite a los desarrolladores y empresas un método fiable y rentable para dirigir a los usuarios a nuestras aplicaciones por medio de la traducción de nombres de dominio a ips numéricas. En este caso la utilizamos para la redirección de los dominios adquiridos por medio de Namecheap hacia nuestro balanceador de carga.


Se crearon dos zonas alojadas
![image](https://user-images.githubusercontent.com/25576463/197363672-a93291d0-8bed-44f6-9e27-6db8737ad72a.png)

Al crear una zona nos brinda la información necesaria para poder configurarlo en nuestro dominio en Namecheap
![image](https://user-images.githubusercontent.com/25576463/197363680-8693ea34-97ff-4c3f-b93b-6e3fb8363a46.png)

Finalmente se crea un registro en el cual se configura la redirección del tráfico hacia nuestro balanceador de carga previamente creado:
![image](https://user-images.githubusercontent.com/25576463/197363710-7fa2802a-e3b1-4c35-9dfb-fde00c982b94.png)

### HTTPS
Para la implementación de https se utilizo un certificado gratuito. 
## Seguridad
Se crearon las políticas de seguridad para el tráfico a través de la creación de ACLs y/o Security Groups. Este paso es de vital importancia para agregar capas extra de seguridad dentro de la VPC.
![image](https://user-images.githubusercontent.com/24425432/200106113-82ffd97d-eb48-47bb-b112-0d86e4d26c15.png)

## Nombres de Dominio
Se crearon nombres de dominio, que permitan acceder a la API, nombre de dominio principal y un nombre de dominio secundario que funciona como un alias para los dominios principales.
• grupo#-fp-api.tk (principal)
• grupo#-de-api.tk (principal)
• grupo#-fp-api.ml (secundario)
• grupo#-de-api.ml (secundario)
La página puede ser accedida desde cualquiera de los dos dominios definidos para cada departamento.
Acceso a internet para las instancias dentro de las subredes privadas
Debido a que las instancias se encuentran en una subred privada, estas no poseen acceso a internet. Esto imposibilita la capacidad de actualizar o instalar paquete en las instancias. Es por ello que se agrego un NAT Gateway, y realizaron las configuraciones necesarias para garantizar el acceso a internet de manera segura para las instancias.

![image](https://user-images.githubusercontent.com/24425432/200106122-3e0dcf4b-0c86-4a78-88e9-8707da200e90.png)




