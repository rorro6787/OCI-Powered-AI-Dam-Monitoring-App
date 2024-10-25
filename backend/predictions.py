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
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf

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
        print(df)

        # Asegurarte de que la columna de fecha es datetime
        df['fecha'] = pd.to_datetime(df['fecha'])
        # df.set_index('fecha', inplace=True)

        # Verificar los primeros registros
        print(df.head())

        plot_acf(df["fecha"], lags=40)
        plot_pacf(df["fecha"], lags=40)

    else:
        print(f"Error: {response.status_code}")

if __name__ == "__main__":
    request_dam(6)