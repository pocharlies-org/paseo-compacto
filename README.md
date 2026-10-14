# paseo-compacto

Plugin de Paseo: las tools entre dos mensajes del agente, en una sola línea que se despliega (y cada tool se vuelve a
desplegar), como en VS Code.

La agrupación es de Paseo: **Ajustes → Chat → «Tool call display» → «Summary»**, una vez en cada dispositivo (el
ajuste vive en cada cliente). Paseo solo junta tool calls seguidos, así que cada Thinking intercalado parte el grupo.
Este plugin quita del timeline el Thinking ya terminado; mientras se escribe sigue viéndose (lo pinta paseo-tokps o la
fila nativa).

Límite: el texto del Thinking deja de verse en el historial. La API de plugins solo deja cambiar un elemento por otro
del plugin, y eso también parte el grupo: meterlo dentro del grupo, como VS Code, es un cambio del propio Paseo.

Requiere Paseo `>=0.11.2 <0.12.0`.

## Desarrollo y despliegue

`npm ci --ignore-scripts && npm run typecheck && npm test`. `scripts/deploy.sh` desde el trunk del clon: carpeta
versionada `<versión>-<sha>` en `~/.local/share/paseo-compacto/paseo-plugin/`, enlace `current` y
`paseo plugin install/reload`.
