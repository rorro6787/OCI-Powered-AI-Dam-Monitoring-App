import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
import requests
from sklearn.metrics import mean_squared_error  # This import should work

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.stattools import adfuller
import warnings

def request_dam(id: int):
    # return pd.read_csv(f"backend/data/dam_{id}.csv")
    url = f'https://gc22e38dbd8c2e8-polishcow.adb.eu-madrid-1.oraclecloudapps.com/ords/polish_user/embalse_agua_model/?q={{"ID":{{"$eq":{id}}}}}&limit=10000'
    response = requests.get(url)
    # Verifica el estatus de la petición y procesa la respuesta
    if response.status_code == 200:
        # Ignorar advertencias
        warnings.filterwarnings("ignore")

        # Crear el DataFrame
        df = pd.DataFrame(response.json()['items'], columns=['fecha', 'agua_actual'])

        # Asegurarte de que la columna de fecha es datetime
        df['fecha'] = pd.to_datetime(df['fecha'])
        df.set_index('fecha', inplace=True)

        # Verificar los primeros registros
        print(df.head())

       

        # Comprobar estacionariedad
        result = adfuller(df['agua_actual'])
        print('Estadístico ADF:', result[0])
        print('Valor p:', result[1])

        # Si la serie no es estacionaria, diferenciarla
        if result[1] > 0.05:
            df['agua_actual'] = df['agua_actual'].diff().dropna()

        # Ajustar el modelo ARIMA
        model = ARIMA(df['agua_actual'].dropna(), order=(1, 1, 1))  # Cambia (p, d, q) según sea necesario
        model_fit = model.fit()

        # Resumen del modelo
        print(model_fit.summary())

        # Hacer predicciones para los próximos 10 años (1 por año)
        n_years = 10
        forecast = model_fit.forecast(steps=n_years)

        # Crear un índice de fechas para las predicciones
        last_date = df.index[-1]
        forecast_index = pd.date_range(start=last_date + pd.DateOffset(years=1), periods=n_years, freq='Y')

        # Convertir las predicciones a un DataFrame
        forecast_df = pd.DataFrame(forecast, index=forecast_index, columns=['Predicción'])

        

        # Imprimir las predicciones\nRED
        print("\nPREDICCIONES\n")
        print(forecast_df)
        """
        mean_data = df.groupby('fecha')['agua_actual'].mean().reset_index()
        plt.figure(figsize=(10, 6))
        plt.plot(mean_data['fecha'], mean_data['agua_actual'], marker='o')
        plt.title('Promedio de Agua Actual por Año')
        plt.xlabel('Año')
        plt.ylabel('Agua Actual')
        plt.xticks(mean_data['fecha'])
        plt.grid()
        plt.show()
        """
        

        # Convertir la columna 'fecha' a formato datetime
        # df['fecha'] = pd.to_datetime(df['fecha'])

        # Establecer la columna 'fecha' como índice del DataFrame
        # df.set_index('fecha', inplace=True)
        # df_resampled = df.resample('Y').mean()
        # print(df_resampled)
        # print(df)
    else:
        print(f"Error: {response.status_code}")









if __name__ == "__main__":
    request_dam(6)


'''
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
import requests
from sklearn.metrics import mean_squared_error  # This import should work


def request_dam(id: int):
    # return pd.read_csv(f"backend/data/dam_{id}.csv")
    url = f'https://gc22e38dbd8c2e8-polishcow.adb.eu-madrid-1.oraclecloudapps.com/ords/polish_user/embalse_agua_model/?q={{"ID":{{"$eq":{id}}}}}&limit=10000'
    response = requests.get(url)
    # Verifica el estatus de la petición y procesa la respuesta
    if response.status_code == 200:
        data = response.json()  # Obtén la respuesta en formato JSON
        # print(data)
        df = pd.DataFrame(response.json()['items'], columns=['fecha', 'agua_actual'])
        print(df)

        



        df['fecha'] = pd.to_datetime(df['fecha'])  # Convertir a datetime
        df.set_index('fecha', inplace=True)  # Establecer la fecha como índice
        
        train_size = int(len(df) * 0.8)  # 80% para entrenamiento
        train, test = df.iloc[:train_size], df.iloc[train_size:]
        print(train['agua_actual'])

        model = ARIMA(train['agua_actual'], order=(1, 1, 1))  # Ajusta p, d, q según sea necesario
        model_fit = model.fit()

        # Resumen del modelo
         #print(model_fit.summary())
        n_steps = 5 * 365 
        predictions = model_fit.forecast(steps=n_steps)
        predictions = pd.Series(predictions, index=test.index)
        print(predictions)




        """
        mean_data = df.groupby('fecha')['agua_actual'].mean().reset_index()
        plt.figure(figsize=(10, 6))
        plt.plot(mean_data['fecha'], mean_data['agua_actual'], marker='o')
        plt.title('Promedio de Agua Actual por Año')
        plt.xlabel('Año')
        plt.ylabel('Agua Actual')
        plt.xticks(mean_data['fecha'])
        plt.grid()
        plt.show()
        """
        

        # Convertir la columna 'fecha' a formato datetime
        # df['fecha'] = pd.to_datetime(df['fecha'])

        # Establecer la columna 'fecha' como índice del DataFrame
        # df.set_index('fecha', inplace=True)
        # df_resampled = df.resample('Y').mean()
        # print(df_resampled)
        # print(df)
    else:
        print(f"Error: {response.status_code}")





def prediction(df: pd.DataFrame):
    # ARIMA model
    model = ARIMA(df['agua_actual'], order=(5, 1, 0))
    model_fit = model.fit()
    forecast = model_fit.forecast(steps=7)
    print(forecast)
    return forecast








if __name__ == "__main__":
    request_dam(6)


'''