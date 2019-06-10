FROM jupyter/all-spark-notebook
RUN npm install -g itypescript typescript
USER root

RUN its --install=global && \
    rm -r /home/$NB_USER/.local

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    mongodb && \
    rm -rf /var/lib/apt/lists/*

USER $NB_USER

RUN pip install --no-cache-dir imongo-kernel # && \
    #rm -rf /home/$NB_USER/.local && \
    #fix-permissions $CONDA_DIR && \
    #fix-permissions /home/$NB_USER

