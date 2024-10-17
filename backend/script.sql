CREATE OR REPLACE FUNCTION remove_accent(p_texto IN VARCHAR2)
RETURN VARCHAR2
IS
    v_resultado VARCHAR2(4000);
BEGIN
    v_resultado := REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(p_texto, 'Á', 'A'), 'É', 'E'), 'Í', 'I'), 'Ó', 'O'), 'Ú', 'U');
    RETURN v_resultado;
END;
/

UPDATE LISTADO
SET NOMBRE = remove_accent(nombre);

UPDATE EMBALSE
SET EMBALSE_NOMBRE = remove_accent(EMBALSE_NOMBRE);

ALTER TABLE EMBALSE
ADD CONSTRAINT pk_embalse PRIMARY KEY (ID);

ALTER TABLE AGUA
ADD CONSTRAINT fk_embalse
FOREIGN KEY (ID) REFERENCES EMBALSE(ID);

BEGIN
    -- Actualizamos la columna ID en la tabla LISTADO
    FOR r IN (SELECT CODIGO, NOMBRE 
              FROM LISTADO) 
    LOOP
        -- Intentamos encontrar el ID correspondiente en la tabla EMBALSE
        UPDATE LISTADO l
        SET l.ID = (SELECT e.ID 
                    FROM EMBALSE e 
                    WHERE e.EMBALSE_NOMBRE = r.NOMBRE)
        WHERE l.CODIGO = r.CODIGO
        AND EXISTS (SELECT 1 
                    FROM EMBALSE e 
                    WHERE e.EMBALSE_NOMBRE = r.NOMBRE);
        
        -- Si no hay coincidencia, asignamos 0
        UPDATE LISTADO l
        SET l.ID = 0
        WHERE l.CODIGO = r.CODIGO
        AND NOT EXISTS (SELECT 1 
                        FROM EMBALSE e 
                        WHERE e.EMBALSE_NOMBRE = r.NOMBRE);
    END LOOP;
END;
/
