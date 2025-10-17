# 🚀 Guía Completa de Despliegue - IA MOTORSHUB

## ✅ Mejoras Implementadas

1. **Logo Agrandado**: 
   - Navbar: de 64px a 80px de altura
   - Hero: de 128px/160px a 192px/256px de altura

2. **Carrusel de Imágenes en Hero**:
   - 6 imágenes rotando automáticamente cada 5 segundos
   - Transiciones suaves entre imágenes
   - Overlay oscuro para mejor legibilidad del texto

3. **Animaciones en Tarjetas**:
   - Efecto hover con escala (1.02x)
   - Sombras animadas en color azul
   - Zoom en imágenes al pasar el mouse
   - Efecto flip 3D para mostrar más información
   - Transiciones suaves en todos los elementos

---

## 🎯 OPCIÓN 1: Despliegue en Vercel (RECOMENDADO)

### ¿Por qué Vercel?
- ✅ Gratis para proyectos personales
- ✅ Soporta Node.js/Express (tu backend)
- ✅ SSL/HTTPS automático
- ✅ CDN global para velocidad máxima
- ✅ Despliegues automáticos desde GitHub
- ✅ Fácil configuración de dominio personalizado

### Paso 1: Preparar GitHub
Tu repositorio ya está listo en: `https://github.com/lazartef322-create/IAMotorshubRenewal`

**IMPORTANTE**: Necesitas hacer push de los cambios más recientes:

```bash
# Desde tu computadora local, clona el repo si no lo tienes:
git clone https://github.com/lazartef322-create/IAMotorshubRenewal.git
cd IAMotorshubRenewal

# O si ya lo tienes, actualiza:
git pull origin main

# Descarga los archivos actualizados que te voy a proporcionar
# y reemplázalos en tu proyecto local

# Luego haz commit y push:
git add .
git commit -m "Update with carousel, larger logo, and animations"
git push origin main
```

### Paso 2: Crear Cuenta en Vercel

1. Ve a: **https://vercel.com/signup**
2. Haz clic en "Continue with GitHub"
3. Autoriza a Vercel para acceder a tu cuenta de GitHub
4. Completa el registro

### Paso 3: Importar el Proyecto

1. En el dashboard de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Vercel detectará automáticamente tus repositorios de GitHub
3. Busca **"IAMotorshubRenewal"** y haz clic en **"Import"**

### Paso 4: Configurar el Proyecto

En la página de configuración, ingresa lo siguiente:

**Framework Preset**: `Other` (o déjalo en auto-detect)

**Build & Development Settings**:
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

**Root Directory**: `.` (dejar por defecto)

**Environment Variables** (Variables de Entorno):
Haz clic en "Add" para cada una:

| Key | Value |
|-----|-------|
| `SMTP_USER` | `contacto@iamotorshub.com` |
| `SMTP_PASS` | `wbeq evwl vcjh irdj` |
| `NODE_ENV` | `production` |

### Paso 5: Desplegar

1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel construye y despliega tu sitio
3. Una vez completado, verás un mensaje de éxito con una URL como:
   - `https://iamotorshub-renewal.vercel.app`
   - `https://iamotorshub-renewal-git-main-lazartef322.vercel.app`

4. **¡Prueba tu sitio!** Haz clic en la URL para verificar que todo funciona

### Paso 6: Configurar tu Dominio Personalizado

#### 6.1 En Vercel:
1. En el dashboard del proyecto, ve a **"Settings"** (en la parte superior)
2. En el menú lateral, haz clic en **"Domains"**
3. Haz clic en **"Add"**
4. Ingresa: `www.iamotorshub.com`
5. Haz clic en **"Add"**

Vercel te mostrará instrucciones específicas. Generalmente te pedirá configurar un registro CNAME.

#### 6.2 En GoDaddy (donde está tu dominio):

1. Inicia sesión en **GoDaddy.com**
2. Ve a **"My Products"** → **"Domains"**
3. Encuentra `iamotorshub.com` y haz clic en **"DNS"** o **"Manage DNS"**

4. **Busca el registro actual de `www`** (si existe) y edítalo, o crea uno nuevo:

**Configuración CNAME (Recomendado)**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600 (o 3600)
```

**O si Vercel te da una IP específica, usa A Record**:
```
Type: A
Name: www
Value: [IP que te proporcione Vercel]
TTL: 600
```

5. **Guarda los cambios**

6. Vuelve a Vercel y haz clic en **"Refresh"** o **"Verify"**

#### 6.3 Esperar Propagación DNS
- La propagación DNS puede tomar de **5 minutos a 48 horas**
- Usualmente funciona en **15-30 minutos**
- Puedes verificar el estado en: https://dnschecker.org/

### Paso 7: Verificar el Despliegue

Una vez que el DNS se haya propagado, visita:
- `https://www.iamotorshub.com`

Verifica que:
- ✅ El sitio carga correctamente
- ✅ El logo se ve más grande
- ✅ El carrusel de imágenes funciona en el hero
- ✅ Las animaciones de las tarjetas funcionan al hacer hover
- ✅ Los formularios envían correos correctamente
- ✅ Todos los enlaces funcionan
- ✅ El sitio tiene HTTPS (candado verde en el navegador)

---

## 🔧 OPCIÓN 2: Despliegue en Hostinger (Alternativa)

### Limitaciones de Hostinger
⚠️ **IMPORTANTE**: La mayoría de los planes de hosting compartido de Hostinger **NO soportan aplicaciones Node.js**. Solo sirven archivos estáticos (HTML, CSS, JS).

Si tu plan de Hostinger NO soporta Node.js:
- ❌ El backend (envío de correos) NO funcionará
- ✅ El frontend (la página web) SÍ funcionará, pero sin formularios

### Si decides usar Hostinger de todos modos:

#### Opción 2A: Solo Frontend (Sin Backend)

1. **Archivos a subir**: Solo los archivos de la carpeta `dist/public/`
2. **Destino en Hostinger**: Carpeta `public_html`
3. **Resultado**: Sitio web visible pero formularios no funcionarán

#### Opción 2B: Hosting Node.js en Hostinger

Si tienes un plan de Hostinger que **SÍ soporta Node.js**:

1. Verifica en tu panel de Hostinger si tienes la opción "Node.js"
2. Sube todos los archivos del proyecto (no solo `dist`)
3. Configura Node.js en el panel de Hostinger
4. Establece el comando de inicio: `npm start`
5. Configura las variables de entorno en el panel

**Nota**: Este proceso es más complejo y varía según el plan de Hostinger.

---

## 📦 Archivos Listos para Descargar

He preparado el proyecto completo con todas las mejoras. Los archivos están en:
```
/home/ubuntu/IAMotorshubRenewal/
```

Para descargar el proyecto completo, puedes:
1. Hacer un ZIP del proyecto
2. Subirlo a tu GitHub
3. Descargarlo desde GitHub a tu computadora local

---

## 🆘 Solución de Problemas

### El carrusel no se ve
- Verifica que las imágenes se hayan subido correctamente
- Revisa la consola del navegador (F12) para errores

### Los formularios no envían correos
- Verifica que las variables de entorno estén configuradas en Vercel
- Revisa los logs en el dashboard de Vercel

### El dominio no funciona
- Espera más tiempo (hasta 48 horas para propagación DNS)
- Verifica la configuración DNS en GoDaddy
- Usa https://dnschecker.org/ para verificar

### Error al construir en Vercel
- Verifica que el `package.json` esté correcto
- Revisa los logs de construcción en Vercel
- Asegúrate de que todas las dependencias estén instaladas

---

## 📞 Próximos Pasos

1. **Elige una opción de despliegue** (Vercel recomendado)
2. **Sigue los pasos detallados** arriba
3. **Prueba el sitio** en la URL temporal de Vercel
4. **Configura tu dominio** personalizado
5. **Verifica que todo funcione** correctamente

---

## 🎉 ¡Listo!

Una vez completados estos pasos, tu sitio web estará en vivo en `www.iamotorshub.com` con todas las mejoras implementadas.

Si necesitas ayuda adicional, no dudes en contactarme.

