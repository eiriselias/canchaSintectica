interface Equipo{
    nombreEquipo: string,
    nombreTencnico: string,
    apellidoTecnico: string,
    jugadores: Jugador[],
    logo: string,
    pj: number, // partidos jugados
    pg: number, // partidos ganados
    pe: number, // partidos empatados
    pp: number, // partidos perdidos
    gf: number, // goles afabor
    gc: number, // goles en contra
    df: number, // diferencia de goles
    pts: number // puntos
}